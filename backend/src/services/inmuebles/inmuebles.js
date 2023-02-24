const {
    getInmuebleByIdModel,
    getInmuebleByNameModel,
    searchInmuebleByRentaModel,
    newInmuebleModel,
    searchInmuebleByTypeModel
} = require('../../models/inmuebles/inmuebles');

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

const newInmuebleService = async (data) => {
    try{
        let response = await newInmuebleModel(data);        
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