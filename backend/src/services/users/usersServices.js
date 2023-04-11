const {
    getInformationUserModel,
    newUserModels,
    editUserModels,
    getInformationUserModelByName,
    deleteUserModels
} = require('../../models/users/userModels');

const getInformationUserServices = async (data) => {

    try{
        let response = await getInformationUserModel(data);        
        return response;
    } catch(error){
        return error;
    }
}

const getInformationUserServicesByName = async (nombre) => {

    try{
        let response = await getInformationUserModelByName(nombre);        
        return response;
    } catch(error){
        return error;
    }
}

const newUserServices = async (data) => {
    
    try{
        let response = await newUserModels(data);        
        return response;
    } catch(error){
        return error;
    }
}

const deleteUserServices = async (id) => {
    
    try{
        let response = await deleteUserModels(id);        
        return response;
    } catch(error){
        return error;
    }
}

const editUserServices = async (id, data) => {
    
    try{
        let response = await editUserModels(id, data);        
        return response;
    } catch(error){
        return error;
    }
}

module.exports = {
    getInformationUserServices,
    newUserServices,
    editUserServices,
    getInformationUserServicesByName,
    deleteUserServices
};