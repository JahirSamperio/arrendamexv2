const {
    getPaymentInfo
} = require('../../models/paypal/payments');

const getPaymentInfoServices = async (id_inmueble) => {
    try{
        let response = await getPaymentInfo(id_inmueble);        
        return response;
    } catch(error){
        return error;
    }
}

module.exports = {
    getPaymentInfoServices
}