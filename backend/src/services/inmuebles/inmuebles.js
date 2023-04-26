const {
    getInmuebleByIdModel,
    getInmuebleByNameModel,
    searchInmuebleByRentaModel,
    newInmuebleModel,
    searchInmuebleByTypeModel,
    getAllInmueblesModel,
    getArrendatariosModel,
    getInmuebleByArrendadorModel,
    editInmuebleModel
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

const getAllInmuebleService = async () => {
    try{
        let response = await getAllInmueblesModel();        
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

const editInmuebleService = async (data, id_inmueble) => {
    const {pathImage} = data.files;
    try{
        const { secure_url } = await cloudinary.uploader.upload(
            pathImage.tempFilePath
        );
        data.body.pathImage = secure_url;
        let response = await editInmuebleModel(data.body, id_inmueble);        
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

/********** SECCION DE MIS ARRENDAMIENTOS EN LA DASHBOARD **************/

//Arrendados */
const getArrendatariosService = async (id_usuario) => {
    try{
        let response = await getArrendatariosModel(id_usuario);        
        return response;
    } catch(error){
        return error;
    } 
}

//Inmuebles */
const getInmuebleByArrendadorService = async (id_usuario) => {
    try{
        let response = await getInmuebleByArrendadorModel(id_usuario);        
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
    searchInmuebleByTypeService,
    getAllInmuebleService,
    getArrendatariosService,
    getInmuebleByArrendadorService,
    editInmuebleService
}