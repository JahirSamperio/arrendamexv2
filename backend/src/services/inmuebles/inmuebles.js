const {
    getInmuebleByIdModel,
    getInmuebleByNameModel,
    searchInmuebleByRentaModel,
    newInmuebleModel,
    searchInmuebleByTypeModel
} = require('../../models/inmuebles/inmuebles');

//cloudinary
const cloudinary = require("cloudinary").v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const newInmuebleService = async (data) => {
    const {fileImage} = data.files;
    try{
        const { secure_url } = await cloudinary.uploader.upload(
            fileImage.tempFilePath
        );
        data.body.pathImage = secure_url;
        let response = await newInmuebleModel(data.body);        
        return response;
    } catch(error){
        return error;
    } 
}

const getInmuebleByIdService = async (id_usuario) => {
    try{
        let response = await getInmuebleByIdModel(id_usuario);        
        return response;
    } catch(error){
        return error;
    } 
}

const getInmuebleByNameService = async (nombre) => {
    try{
        let response = await getInmuebleByNameModel(nombre);        
        return response;
    } catch(error){
        return error;
    } 
}
const searchInmuebleByRentaService = async (renta_venta) => {
    try{
        let response = await searchInmuebleByRentaModel(renta_venta);        
        return response;
    } catch(error){
        return error;
    } 
}


const searchInmuebleByTypeService = async (tipoInmueble) => {
    try{
        let response = await searchInmuebleByTypeModel(tipoInmueble);        
        return response;
    } catch(error){
        return error;
    } 
}

module.exports = {
    getInmuebleByIdService,
    getInmuebleByNameService,
    searchInmuebleByRentaService,
    newInmuebleService,
    searchInmuebleByTypeService
}