const { response } = require('express');
const {
    getInmuebleByIdService,
    getInmuebleByNameService,
    searchInmuebleByRentaService,
    newInmuebleService,
    searchInmuebleByTypeService
} = require('../../services/inmuebles/inmuebles');

const getInmuebleByIdController = async (req, res) => {
    const { id_usuario } = req.query;
    try {
        let response = await getInmuebleByIdService(id_usuario);
        
        return res.status(200).json({
            response
        })

    } catch (error) {
        return res.status(500).json({
            msg: 'Information couldnt get'
        })
    }
}

const getInmuebleByNameController = async (req, res) => {
    const { nombre } = req.query;
    try {
        let response = await getInmuebleByNameService(nombre);
        
        return res.status(200).json({
            response
        })

    } catch (error) {
        return res.status(500).json({
            msg: 'Information could not get'
        })
    }
}

const newInmuebleController = async (req = request, res) => {
    const { nombre, descripcion, tipoInmueble, renta_venta, precio} = req.body;
    try {
        let response = await newInmuebleService(req);
        
        return res.status(200).json({
            response
        })

    } catch (error) {
        return res.status(500).json({
            msg: 'Information could not get'
        })
    }
}
const searchInmuebleByRentaController = async (req, res) => {
    const { renta_venta } = req.query;
    try {
        let response = await searchInmuebleByRentaService(renta_venta);
        
        return res.status(200).json({
            response
        })

    } catch (error) {
        return res.status(500).json({
            msg: 'Information could not get'
        })
    }
}
const searchInmuebleByTypeController = async (req, res) => {
    const { tipoInmueble } = req.query;
    try {
        let response = await searchInmuebleByTypeService(tipoInmueble);
        
        return res.status(200).json({
            response
        })

    } catch (error) {
        return res.status(500).json({
            msg: 'Information could not get'
        })
    }
}

module.exports = {
    getInmuebleByIdController,
    getInmuebleByNameController,
    searchInmuebleByRentaController,
    newInmuebleController,
    searchInmuebleByTypeController
}