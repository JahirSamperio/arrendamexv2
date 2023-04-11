const {conexion} = require('../../db/config');

function getPaymentInfo(id_inmueble) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT inmuebles.precio, inmuebles.nombre, inmuebles.descripcion, arrendador.email_paypal, usuarios.nombre, usuarios.apellidos 
            FROM ((inmuebles 
            INNER JOIN arrendador ON inmuebles.id_usuario = arrendador.id)
            INNER JOIN usuarios ON arrendador.id_usuario = usuarios.id)
            WHERE inmuebles.id = '${id_inmueble}'`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
            
    })
}

module.exports = {
    getPaymentInfo
}