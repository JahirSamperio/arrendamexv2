const {conexion} = require('../../db/config');

//Crear contrato
function newContractModel(data) {
    const {fecha_pago, total, id_inmueble, id_usuario, metodo_pago, contrato_digital} = data;
    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO contratos(fecha_pago, total, id_inmueble, id_usuario, metodo_pago, contrato_digital)
            VALUES ('${fecha_pago}', '${total}', '${id_inmueble}', '${id_usuario}', '${metodo_pago}', '${contrato_digital}')`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

module.exports = {
    newContractModel
}