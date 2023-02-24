const {conexion} = require('../../db/config');


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


function editUserModels(id, data){
    const {nombre, apellidos, password} = data;
    
    return new Promise((resolve, reject) => {
        conexion.query(
            `UPDATE usuarios u
            SET nombre = '${nombre}', apellidos = '${apellidos}', password = '${password}
            WHERE u.id = '${id}'}`,
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