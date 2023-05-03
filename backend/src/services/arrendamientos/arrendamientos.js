const {
    getArrendamientosModel
} = require('../../models/arrendamientos/arrendamientos');

const getArrendamientosService = async (id_usuario) => {
    try{
        let response = await getArrendamientosModel(id_usuario);        
        return response;
    } catch(error){
        return error;
    } 
}

module.exports = {
    getArrendamientosService
}