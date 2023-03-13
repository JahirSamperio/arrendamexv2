const { Router } = require('express');
const { check } = require('express-validator');
const { validateLogin } = require('../../validator/login/verificateLogin');
const { cargarArchivo } = require('../../controllers/uploads/uploads');

const router = Router();

router.post('/upload', cargarArchivo);

module.exports = router;