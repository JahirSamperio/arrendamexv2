const {
    newContractModel
} = require('../../models/contratos/contratos');

const newContractServices = async (data) => {
    try{
        let response = await newContractModel(data);        
        return response;
    } catch(error){
        return error;
    }
}

module.exports = {
    newContractServices
}