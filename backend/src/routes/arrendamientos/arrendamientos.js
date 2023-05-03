const { Router } = require('express');
const {
    getArrendamientosController
} = require('../../controllers/arrendamientos/arrendamientos');

const router = Router();

//Busqueda por nombre en barra de navegacion
router.get('/getAll', getArrendamientosController);

module.exports = router;