const cloudinary = require('cloudinary').v2
cloudinary.config(process.env.CLOUDINARY_URL);

const { response } = require("express");
const { subirArchivo } = require('../helpers/subirArchivo');


const cargarArchivo = async(req, res = response) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).json({msg: 'No hay archivos que subir'});
        return;
    }

    try{
        //txt
        const pathArchivo = await subirArchivo(req.files, ['txt', 'md'], 'textos');
        res.json({
            path: pathArchivo
        }) 
    } catch(msg) {
        res.status(400).json({ msg });
    }
}

const actualizarImagen = (req, res = response) => {
    const {id, coleccion} = req.params;
    res.json({ id, coleccion })
}

module.exports = {
    cargarArchivo,
    actualizarImagen
}