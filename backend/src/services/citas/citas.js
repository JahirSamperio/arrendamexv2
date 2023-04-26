const {
    createCitaModel,
    getCitaModel,
    sendCitaModel,
    getCitaAceptadaModel,
    deleteCitaModel
} = require('../../models/citas/citas');

const createCitaServices = async (data) => {
    try{
        let response = await createCitaModel(data);        
        return response;
    } catch(error){
        return error;
    }
}

const getCitaServices = async (id_usuario) => {
    try{
        let response = await getCitaModel(id_usuario);        
        return response;
    } catch(error){
        return error;
    }
}

const sendCitaServices = async (data) => {
    try{
        let response = await sendCitaModel(data);        
        return response;
    } catch(error){
        return error;
    }
}

const getCitaAceptadaServices = async (id_usuario) => {
    try{
        let response = await getCitaAceptadaModel(id_usuario);        
        return response;
    } catch(error){
        return error;
    }
}

const deleteCitaServices = async (id_cita) => {
    try{
        let response = await deleteCitaModel(id_cita);        
        return response;
    } catch(error){
        return error;
    }
}

const citasSolicitdasLengthServices = async (id_usuario) => {
    try{
        let response = await getCitaModel(id_usuario);      
        let numCitas = response.length;  
        return numCitas;
    } catch(error){
        return error;
    }
}

module.exports = {
    createCitaServices,
    getCitaServices,
    sendCitaServices,
    getCitaAceptadaServices,
    deleteCitaServices,
    citasSolicitdasLengthServices
}