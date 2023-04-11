
const { response } = require('express');
const bcryptjs = require('bcryptjs');
const {
    getInformationUserServices,
    newUserServices,
    editUserServices,
    getInformationUserServicesByName,
    deleteUserServices
} = require('../services/users/usersServices');

const getInformationUserController = async (req, res) => {
    try {
        const data = req.query;
        let response = await getInformationUserServices(data);

        return res.status(200).json({
            response
        })

    } catch (error) {
        return res.status(500).json({
            msg: 'User information could not get'
        })
    }
}

const getInformationUserControllerByName = async (req, res) => {
    try {
        const { nombre } = req.query;
        let response = await getInformationUserServicesByName(nombre);

        return res.status(200).json({
            response
        })

    } catch (error) {
        return res.status(500).json({
            msg: 'User information could not get'
        })
    }
}

const deleteUserController = async (req = request, res) => {
    const { id } = req.query;

    try {
               
        //verificar si correo existe 
        

        let response = await deleteUserServices(id);

        return res.status(200).json({
            msg: 'Elimnado correctamente'
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error en el servidor'
        })
    }
}

const newUserController = async (req = request, res) => {
    const {nombre, apellidos, email, password, telefono} = req.body;

    try {
               
        //verificar si correo existe 
        

        let response = await newUserServices(req.body);

        return res.status(200).json({
            response
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error en el servidor'
        })
    }
}

const editUserController = async (req, res) => {
    try {
        const {nombre, apellidos, password, email, telefono} = req.body;
        const { id } = req.query;
        let response = await editUserServices(id, req.body);
        return res.status(200).json({
            response
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error en el servidor'
        })
    }
}

//Relacionar usuario e inmueble






module.exports = {
    getInformationUserController,
    newUserController,
    editUserController,
    getInformationUserControllerByName,
    deleteUserController
}