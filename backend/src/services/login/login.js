const {
    logUserModel
} = require('../../models/login/login');

const logUserServices = async (email, password) => {
    try{
        let response = await logUserModel(email, password);        
        return response;
    } catch(error){
        return error;
    }
}

module.exports = {
    logUserServices
}