const {conexion} = require('../../db/config');

//Selecciona informacion del inmueble
function getUltimosPagosModels(id_usuario) {

    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT usuarios_arrendatario.nombre AS nombreUsuario, usuarios_arrendatario.apellidos, pagos_paypal.fecha, pagos_paypal.total, inmuebles.nombre
            FROM pagos_paypal
            JOIN contratos 
            ON pagos_paypal.id_contrato = contratos.id
            JOIN arrendatarios 
            ON contratos.id_arrendatario = arrendatarios.id
            JOIN usuarios 
            AS usuarios_arrendatario 
            ON arrendatarios.id_usuario = usuarios_arrendatario.id
            JOIN inmuebles 
            ON contratos.id_inmueble = inmuebles.id
            JOIN arrendador
            ON inmuebles.id_arrendador = arrendador.id
            JOIN usuarios
            AS usuarios_arrendador 
            ON arrendador.id_usuario = usuarios_arrendador.id
            WHERE usuarios_arrendador.id = '${id_usuario}'`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

module.exports = {
    getUltimosPagosModels
}