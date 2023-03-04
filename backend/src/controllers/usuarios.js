
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
        const {nombre, apellidos, password} = req.body;
        const id = req.query;
        let response = await editUserServices(id, req.body);
        return res.status(200).json({
            nombre: nombre,
            apellidos: apellidos,
            password 
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error en el servidor'
        })
    }
}









const usuariosGet = (req, res = response) => {
    const { q, nombre, id } = req.query;

    res.json({
        msg: 'Get API - controlador',
        q,
        nombre,
        id
    });
}

const usuariosPost = (req, res = response) => {
    const body = req.body;

    res.json({
        msg: 'Post API - controlador',
        body
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;
    res.json({
        msg: 'Put API - controlador',
        id
    });

}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - controlador'
    });
}


module.exports = {
    getInformationUserController,
    newUserController,
    editUserController
}