const {conexion} = require('../../db/config');

//Obtiene los ultimos pagos realizados
function getUltimosPagosModels(id_contrato, fecha) {

    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT usuarios_arrendatario.nombre AS nombreUsuario, usuarios_arrendatario.apellidos, pagos_paypal.fecha, pagos_paypal.total, inmuebles.nombre
            FROM pagos_paypal
            JOIN contratos
            ON pagos_paypal.id_contrato = contratos.id
            JOIN usuarios 
            AS usuarios_arrendatario 
            ON contratos.id_usuario = usuarios_arrendatario.id
            JOIN inmuebles 
            ON contratos.id_inmueble = inmuebles.id
            JOIN arrendador
            ON inmuebles.id_arrendador = arrendador.id
            JOIN usuarios
            AS usuarios_arrendador 
            ON arrendador.id_usuario = usuarios_arrendador.id
            WHERE contratos.id = '${id_contrato}'
            AND pagos_paypal.fecha = '${fecha}'
            `,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}


//Fechas que estan en el contrato con el arrendatario
function getFechasDelContratoModels(id_usuario) {    
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT contratos.fecha_pago, contratos.id
            FROM contratos
            JOIN inmuebles
            ON contratos.id_inmueble = inmuebles.id
            JOIN arrendador
            ON inmuebles.id_arrendador = arrendador.id
            JOIN usuarios
            ON arrendador.id_usuario = usuarios.id
            WHERE usuarios.id = '${id_usuario}'`,
            function (error, result, field) {
                if (error) 
                return reject(error);
                return resolve(result);
            })
        })
    }

//Fecha de todos los pagos realizados
function getFechasDePaypalModels(id_usuario) { 
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT pagos_paypal.fecha, pagos_paypal.id_contrato
            FROM pagos_paypal
            JOIN contratos
            ON pagos_paypal.id_contrato = contratos.id
            JOIN inmuebles
            ON contratos.id_inmueble = inmuebles.id
            JOIN arrendador
            ON inmuebles.id_arrendador = arrendador.id
            JOIN usuarios
            ON arrendador.id_usuario = usuarios.id
            WHERE usuarios.id = '${id_usuario}'`,
            function (error, result, field) {
                if (error) 
                return reject(error);
                return resolve(result);
            })
        })
    }

//Busca los datos del usuario desde el id del contrato
function getUserByContratoIdModels(id_contrato) {    
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT usuarios.nombre, usuarios.apellidos, contratos.total
            FROM usuarios
            JOIN contratos
            ON contratos.id_usuario = usuarios.id
            WHERE contratos.id = '${id_contrato}'`,
            function (error, result, field) {
                if (error) 
                return reject(error);
                return resolve(result);
            })
        })
    }


function getTotalPaymentsTodayModels(id_usuario) {    
    const fechaActual = new Date().toISOString().substring(0, 10);
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT SUM(pagos_paypal.total)
            FROM pagos_paypal
            JOIN contratos
            ON pagos_paypal.id_contrato = contratos.id
            JOIN inmuebles
            ON contratos.id_inmueble = inmuebles.id
            JOIN arrendador
            ON inmuebles.id_arrendador = arrendador.id
            JOIN usuarios
            ON arrendador.id_usuario = usuarios.id
            WHERE usuarios.id = '${id_usuario}'
            AND pagos_paypal.fecha = '${fechaActual}';`,
            function (error, result, field) {
                if (error) 
                return reject(error);
                return resolve(result);
            })
        })
    }

function getTotalPaymentsMonthModels(id_usuario) {    
    return new Promise((resolve, reject) => {
        conexion.query(
            `
            SELECT SUM(pagos_paypal.total)
            FROM pagos_paypal
            JOIN contratos
            ON pagos_paypal.id_contrato = contratos.id
            JOIN inmuebles
            ON contratos.id_inmueble = inmuebles.id
            JOIN arrendador
            ON inmuebles.id_arrendador = arrendador.id
            JOIN usuarios
            ON arrendador.id_usuario = usuarios.id
            WHERE usuarios.id = '${id_usuario}'
            AND MONTH(fecha) = MONTH(CURRENT_DATE());
            `,
            function (error, result, field) {
                if (error) 
                return reject(error);
                return resolve(result);
            })
        })
    }

    module.exports = {
    getUltimosPagosModels,
    getFechasDelContratoModels,
    getFechasDePaypalModels,
    getUserByContratoIdModels,
    getTotalPaymentsTodayModels,
    getTotalPaymentsMonthModels
}