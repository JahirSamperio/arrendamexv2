const { Router } = require('express');
const { check } = require('express-validator');
const { validateLogin } = require('../../validator/login/verificateLogin');
const { cargarArchivo,
        actualizarImagen } = require('../../controllers/uploads');

const router = Router();

router.post('/upload', cargarArchivo);
router.put('/update', actualizarImagen);
// router.put('/:coleccion/:id', [
//     check('id', 'id')
// ], actualizarImagen);

module.exports = router;