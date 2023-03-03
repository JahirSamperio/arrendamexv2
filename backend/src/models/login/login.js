const {conexion} = require('../../db/config');

function logUserModel(email, password){
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM usuarios u
            WHERE u.email = "${email}" 
            AND u.password = "${password}"`, 
            function (error, result, field) {
                if(error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

module.exports = {
    logUserModel
}