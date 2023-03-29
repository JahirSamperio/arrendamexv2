const {conexion} = require('../../db/config');

//Selecciona informacion del inmueble
function getInformationUserModel(data) {

    const {id} = data;

    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * 
            FROM usuarios 
            WHERE usuarios.id = '${id}'`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

//Registro de nuevo usuario
function newUserModels(data){
    const {nombre, apellidos, email, password} = data;
    
    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO usuarios (nombre, apellidos, email, password)
            VALUES ('${nombre}', '${apellidos}', '${email}', '${password}')`,
            function(error, result, field){
                if(error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

//Edicion de la informacion del usuario
function editUserModels(id, data){
    const {nombre, apellidos, password, email, telefono} = data;
    
    return new Promise((resolve, reject) => {
        conexion.query(
            `UPDATE usuarios 
            SET nombre = '${nombre}', apellidos = '${apellidos}', password = '${password}, email = '${email}', telefono = '${telefono}'
            WHERE usuarios.id = '${id}'`,
            function(error, result, field){
                if(error) 
                    return reject(error);
                return resolve(result);
            })
    })
}


//Relacionar usuario e inmueble
function userInmuebleInformation(id, data){
    const {} = data;
    
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT c
            FROM contratos c
            INNER JOIN 
            WHERE usuarios.id = '${id}'}`,
            function(error, result, field){
                if(error) 
                    return reject(error);
                return resolve(result);
            })
    })
}



module.exports = {
    getInformationUserModel,
    newUserModels,
    editUserModels
}