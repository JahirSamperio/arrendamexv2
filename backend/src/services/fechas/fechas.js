const {
    getUltimosPagosModels
} = require('../../models/fechas/fechas');


const getUltimosPagosServices = async (id_usuario) => {

    try{
        let response = await getUltimosPagosModels(id_usuario);        
        return response;
    } catch(error){
        return error;
    }
}

module.exports = {
    getUltimosPagosServices
}