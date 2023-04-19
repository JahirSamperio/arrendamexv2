const { response } = require("express");

const cargarArchivo = (req, res = response) => {
    console.log(req.files);
    res.json({
        msg: 'Hola mundo'
    })
}

module.exports = {
    cargarArchivo
}