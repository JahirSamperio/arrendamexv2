const {
    getInmuebleByIdModel,
    getInmuebleByNameModel,
    searchInmuebleByRentaModel,
    newInmuebleModel,
    searchInmuebleByTypeModel,
    getAllInmueblesModel,
    getArrendatariosModel,
    getInmuebleByArrendadorModel,
    editInmuebleModel,
    getProfileInfoModel,
    getArrendadorIdModel
} = require('../../models/inmuebles/inmuebles');

//cloudinary
const cloudinary = require("cloudinary").v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const newInmuebleService = async (data) => {
    const {fileImage} = data.files;
    let { id_arrendador } = data.body;
    try{
        const { secure_url } = await cloudinary.uploader.upload(
            fileImage.tempFilePath
        );
        data.body.pathImage = secure_url;
        console.log(secure_url);
        
        //Busco el id de arrendador de acuerdo al id_usuario 
        let id_objeto = await getArrendadorIdModel(id_arrendador);
        const { id } = id_objeto[0];
        data.body.id_arrendador = id;

        //Envio los datos 
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

const getArrendatariosLengthService = async (id_usuario) => {
    try{
        let response = await getArrendatariosModel(id_usuario);    
        let numArrendatarios = response.length;    
        return numArrendatarios;
    } catch(error){
        return error;
    } 
}

const getInmueblesLengthService = async (id_usuario) => {
    try{
        let response = await getInmuebleByArrendadorModel(id_usuario);        
        let numInmuebles = response.length;
        return numInmuebles;
    } catch(error){
        return error;
    } 
}

const getProfileInfoService = async (id_inmueble) => {
    try{
        let response = await getProfileInfoModel(id_inmueble);        
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
    editInmuebleService,
    getInmueblesLengthService,
    getArrendatariosLengthService,
    getProfileInfoService
}