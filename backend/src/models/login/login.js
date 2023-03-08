const {conexion} = require('../../db/config');

function logUserModel(data){
    const {email, password} = data;
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