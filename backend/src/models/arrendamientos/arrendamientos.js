const {conexion} = require('../../db/config');

//Obtiene los inmuebles que esta arrendando 
function getArrendamientosModel(id_usuario) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT inmuebles.nombre, contratos.fecha_pago, contratos.total
            FROM contratos
            JOIN inmuebles
            ON contratos.id_inmueble = inmuebles.id
            WHERE contratos.id_usuario = '${id_usuario}';`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
            
    })
}

module.exports = {
    getArrendamientosModel
}
