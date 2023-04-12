const {conexion} = require('../../db/config');

function newArrendadorModels(data){
    const {email_paypal, num_contacto, id_usuario} = data;
    console.log(email_paypal);
    
    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO arrendador (email_paypal, num_contacto, id_usuario)
            VALUES ('${email_paypal}', '${num_contacto}', '${id_usuario}')`,
            function(error, result, field){
                if(error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

module.exports = {
    newArrendadorModels
}