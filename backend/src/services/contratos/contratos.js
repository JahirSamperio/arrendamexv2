const {
    newContractModel
} = require('../../models/contratos/contratos');

//cloudinary
const cloudinary = require("cloudinary").v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const newContractServices = async (data) => {
    const {filePdf} = data.files;
    try{
        const { secure_url } = await cloudinary.uploader.upload(
            filePdf.tempFilePath
        );
        data.body.contrato_digital = secure_url;
        let response = await newContractModel(data.body);        
        return response;
    } catch(error){
        return error;
    }
}

module.exports = {
    newContractServices
}