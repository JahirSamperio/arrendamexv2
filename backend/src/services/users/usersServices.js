const {
    getInformationUserModel,
    newUserModels,
    editUserModels
} = require('../../models/users/userModels');

const getInformationUserServices = async (data) => {

    try{
        let response = await getInformationUserModel(data);        
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
    editUserServices
};