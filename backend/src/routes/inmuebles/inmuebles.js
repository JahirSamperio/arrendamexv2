const { Router } = require('express');
const {
    getInmuebleByIdController,
    getInmuebleByNameController,
    searchInmuebleByRentaController,
    newInmuebleController,
    searchInmuebleByTypeController
} = require('../../controllers/inmuebles/inmuebles');

const router = Router();

router.get('/getInmuebleById', getInmuebleByIdController);
router.get('/getInmuebleByName', getInmuebleByNameController);
router.get('/searchInmuebleByRenta', searchInmuebleByRentaController);
router.post('/newInmueble', newInmuebleController);
router.get('/type', searchInmuebleByTypeController);

module.exports = router;