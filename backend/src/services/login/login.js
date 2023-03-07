const {
    logUserModel
} = require('../../models/login/login');

const logUserServices = async (data) => {
    try{
        let response = await logUserModel(data);        
        return response;
    } catch(error){
        return error;
    }
}

module.exports = {
    logUserServices
}