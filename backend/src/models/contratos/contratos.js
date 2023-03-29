const {conexion} = require('../../db/config');

//Crear contrato
function newContractModel(data) {
    const {id_arrendador, fecha_pago, total, id_inmueble, id_arrendado} = data;
    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO contratos(id_arrendador, fecha_pago, total, id_inmueble, id_arrendado)
            VALUES ('${id_arrendador}', '${fecha_pago}', '${total}', '${id_inmueble}', '${id_arrendado}')`,
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