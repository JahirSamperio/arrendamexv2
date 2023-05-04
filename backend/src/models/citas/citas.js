const {conexion} = require('../../db/config');

//Inserta a la tabla citas_solicitadas para ser aprobadas
function createCitaModel(data) {
    const {hora, fecha, id_inmueble, id_usuario} = data;
    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO citas_solicitadas (hora, fecha, id_inmueble, id_usuario)
            VALUES ('${hora}', '${fecha}', '${id_inmueble}', '${id_usuario}')`,
            function(error, result, field){
                if(error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

//Muestra las citas solicitadas del usuario arrendador
function getCitaModel(id_usuarios) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT usuarios_arrendatarios.nombre as nombreUsuario, usuarios_arrendatarios.apellidos, citas_solicitadas.fecha,
            citas_solicitadas.hora, inmuebles.nombre, citas_solicitadas.id_inmueble, citas_solicitadas.id_usuario, citas_solicitadas.id 
            FROM citas_solicitadas
            JOIN usuarios 
            AS usuarios_arrendatarios
            ON citas_solicitadas.id_usuario = usuarios_arrendatarios.id
            JOIN inmuebles 
            ON citas_solicitadas.id_inmueble = inmuebles.id
            JOIN arrendador
            ON inmuebles.id_arrendador = arrendador.id
            JOIN usuarios
            ON arrendador.id_usuario = usuarios.id
            WHERE usuarios.id = '${id_usuarios}'`,
            function(error, result, field){
                if(error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

//Elimina las citas solicitadas
function deleteCitaModel(id_cita) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `DELETE FROM citas_solicitadas
            WHERE citas_solicitadas.id = '${id_cita}'`,
            function(error, result, field){
                if(error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

//Envia la cita a la tabla citas_aceptadas
function sendCitaModel(data) {
    const {hora, fecha, id_inmueble, id_usuario} = data;
    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO citas_aceptadas (hora, fecha, id_inmueble, id_usuario)
            VALUES ('${hora}', '${fecha}', '${id_inmueble}', '${id_usuario}')`,
            function(error, result, field){
                if(error) 
                return reject(error);
                return resolve(result);
            })
        })
    }

//Muestra las citas aceptadas del usuario arrendador
function getCitaAceptadaModel(id_usuarios) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT usuarios_arrendatarios.nombre as nombreUsuario, usuarios_arrendatarios.apellidos, citas_aceptadas.fecha,
            citas_aceptadas.hora, inmuebles.nombre
            FROM citas_aceptadas
            JOIN usuarios 
            AS usuarios_arrendatarios
            ON citas_aceptadas.id_usuario = usuarios_arrendatarios.id
            JOIN inmuebles 
            ON citas_aceptadas.id_inmueble = inmuebles.id
            JOIN arrendador
            ON inmuebles.id_arrendador = arrendador.id
            JOIN usuarios
            ON arrendador.id_usuario = usuarios.id
            WHERE usuarios.id = '${id_usuarios}'`,
            function(error, result, field){
                if(error) 
                    return reject(error);
                return resolve(result);
            })
    })
}
    
module.exports = {
    createCitaModel,
    getCitaModel,
    sendCitaModel,
    getCitaAceptadaModel,
    deleteCitaModel
}