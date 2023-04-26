const {
    getUltimosPagosModels,
    getFechasDelContratoModels,
    getFechasDePaypalModels,
    getUserByContratoIdModels,
    getTotalPaymentsTodayModels,
    getTotalPaymentsMonthModels
} = require('../../models/fechas/fechas');


const getUltimosPagosServices = async (id_usuario) => {
    try {
        //Todas fechas de pago de los arrendatarios de la tabla pagos_paypal
        let responsePaypal = await getFechasDePaypalModels(id_usuario);
        // console.log(responsePaypal);
        //Ultimas fechas de pago de los arrendatarios de la tabla pagos_paypal
        let ultimosPagos = await obtenerFechaMayorPorContrato(responsePaypal);
        let ultimosPagosRealizados = [];
        for(let i = 0; i < ultimosPagos.length; i++){
            let id_contrato = ultimosPagos[i].id_contrato;
            let fecha = ultimosPagos[i].fecha;
            let [informacionPagoPendiente] =  await getUltimosPagosModels(id_contrato, fecha);
            ultimosPagosRealizados.push(informacionPagoPendiente);
        }
        return ultimosPagosRealizados;
    } catch (error) {
        return error;
    }
}

//Obtiene la fecha mayor de pagos_paypal de cada contrato 
const obtenerFechaMayorPorContrato = (responsePaypal) => {
    const contratosPorNumero = new Map();
    // Agrupar los contratos por número de contrato
    responsePaypal.forEach((contrato) => {
        if (contratosPorNumero.has(contrato.id_contrato)) {
            contratosPorNumero.get(contrato.id_contrato).push(contrato);
        } else {
            contratosPorNumero.set(contrato.id_contrato, [contrato]);
        }
    });
    const fechasMayores = [];

    // Obtener la fecha mayor de cada grupo de contratos
    contratosPorNumero.forEach((contratos) => {
        const fechaMayor = contratos.reduce((prev, curr) => {
            return prev.fecha > curr.fecha ? prev : curr;
        });
        fechasMayores.push(fechaMayor);
    });

    return fechasMayores;
};

//Pendientes *****QUEDA POR MEJORAR LA LÓGICA******* pero ya jala
const getPendientesServices = async (id_usuario) => {

    try {
        //Fechas que estan en el contrato con el arrendatario
        let response = await getFechasDelContratoModels(id_usuario);
        //Todas fechas de pago de los arrendatarios de la tabla pagos_paypal
        let responsePaypal = await getFechasDePaypalModels(id_usuario);
        //Ultimas fechas de pago de los arrendatarios de la tabla pagos_paypal
        let ultimosPagos = await obtenerFechaMayorPorContrato(responsePaypal);
        //Fecha de hoy
        const fechaActual = new Date().toISOString().substring(0, 10);
        const mesActual = fechaActual.substring(5, 7);
        const diaActual = fechaActual.substring(8, 10);
        const añoActual = fechaActual.substring(0, 4);

        //Arreglo para enviarlo al controlador el que va contener si se atraso
        let pendientes = [];
        let mesConsultaContrato;
        let diaConsultaContrato;
        //Toma el dia y mes de cada registro de la fecha del contrato
        for (let i = 0; i < response.length; i++) {
            //Toma cada registro de la tabla en este formato Fri Feb 23 2024 00:00:00 GMT-0600
            let fecha = response[i].fecha_pago.toString();
            //Lo convierte a date
            let fechaConsulta = new Date(fecha);
            //Toma el año, mes y dia 
            let anio = fechaConsulta.getFullYear();
            let mes = ('0' + (fechaConsulta.getMonth() + 1)).slice(-2);
            let dia = ('0' + fechaConsulta.getDate()).slice(-2);
            let fechaFormateada = `${anio}-${mes}-${dia}`;
            //Queda en este formato 2024-03-23                  

            mesConsultaContrato = fechaFormateada.substring(5, 7);
            diaConsultaContrato = fechaFormateada.substring(8, 10);

            //Busca el ultimo pago que coincida con el contrato del arrendatario
            for (let j = 0; j < ultimosPagos.length; j++) {
                if (response[i].id === ultimosPagos[j].id_contrato) {
                    mesUltimoPago = ultimosPagos[j].fecha.substring(5, 7);
                    diaUltimoPago = ultimosPagos[j].fecha.substring(8, 10);
                    if(mesUltimoPago < mesActual && (diaUltimoPago < diaConsultaContrato && diaActual > diaConsultaContrato)){
                        //Busca los nombres de acuerdo al contrato
                        let nombres = await getUserByContratoIdModels(response[i].id);
                        const nombre = nombres[0].nombre;
                        const apellidos = nombres[0].apellidos;
                        const total = nombres[0].total;

                        //Leyenda con la informacion del pago pendiente
                        let leyenda = `${nombre} ${apellidos} pago de ${total} Retrasado desde ${diaConsultaContrato}/${mesActual}/${añoActual}`;
                        let pendiente = {
                            Info: leyenda
                        }    
                        pendientes.push(pendiente);
                    }
                }
            }
        }
        return pendientes;
    } catch (error) {
        return error;
    }
}

const getTotalPaymentsTodayService = async (id_usuario) => {
    try{
        let response = await getTotalPaymentsTodayModels(id_usuario);
        let [{'SUM(pagos_paypal.total)': total}] = response;
        if(total === null){
            response = [{
                total: 0
            }]
        }
        return response;
    } catch(error){
        return error;
    } 
}

const getTotalPaymentsMonthService = async (id_usuario) => {
    try{
        let response = await getTotalPaymentsMonthModels(id_usuario);
        let [{'SUM(pagos_paypal.total)': total}] = response;
        if(total === null){
            response = [{
                total: 0
            }]
        }
        return response;
    } catch(error){
        return error;
    } 
}

const getPendientesLengthService = async (id_usuario) => {
    try{
        let response = await getPendientesServices(id_usuario);
        let numPendientes = response.length;
        return numPendientes;
    } catch(error){
        return error;
    } 
}


module.exports = {
    getUltimosPagosServices,
    getPendientesServices,
    getTotalPaymentsTodayService,
    getTotalPaymentsMonthService,
    getPendientesLengthService
}