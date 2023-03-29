const {
    newArrendadorModels
} = require('../../models/arrendadores/arrendadores');

const newArrendadorServices = async (data) => {
    
    try{
        let response = await newArrendadorModels(data);        
        return response;
    } catch(error){
        return error;
    }
}

module.exports = {
    newArrendadorServices
}