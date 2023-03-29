
const { response } = require('express');
const bcryptjs = require('bcryptjs');
const {
    getInformationUserServices,
    newUserServices,
    editUserServices
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

const newUserController = async (req, res) => {
    try {
        const {nombre, apellidos, email, password} = req.body;
               
        //verificar si correo existe 


        let response = await newUserServices(req.body);

        return res.status(200).json({
            nombre: nombre,
            apellidos: apellidos,
            email,
            password 
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
        const { id } = req.params;
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
    editUserController
}