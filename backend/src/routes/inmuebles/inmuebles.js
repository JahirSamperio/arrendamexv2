const { Router } = require('express');
const {
    getInmuebleByIdController,
    getInmuebleByNameController,
    searchInmuebleByRentaController,
    newInmuebleController,
    searchInmuebleByTypeController,
    getAllInmuebleController,
    getArrendatariosController,
    getInmuebleByArrendadorController,
    editInmuebleController,
    getInmueblesLengthController,
    getArrendatariosLengthController,
    getProfileInfoController
} = require('../../controllers/inmuebles/inmuebles');

const router = Router();


//Busqueda por nombre en barra de navegacion
router.get('/getInmuebleByName', getInmuebleByNameController);

//Filtro de renta y venta
router.get('/searchInmuebleByRenta', searchInmuebleByRentaController);

//Crear nuevo inmueble
router.post('/newInmueble', newInmuebleController);

//Filtro de tipo de inmueble
router.get('/type', searchInmuebleByTypeController);

//HomePage
router.get('/allInmuebles', getAllInmuebleController);

//Dashboard
router.get('/allarrendatarios', getArrendatariosController);

//Obtener el inmueble por el id del arrendador
router.get('/getInmuebleById', getInmuebleByIdController);

//Obtener infonmacion general del inmueble por el id del arrendador para la dashboard
router.get('/generalInformacion', getInmuebleByArrendadorController);

//Editar inmueble
router.post('/editInmueble', editInmuebleController);

//Numero de inmuebles de cada usuario
router.get('/numinmuebles', getInmueblesLengthController);

//Numero de arrendatarios de cada usuario
router.get('/numarrendatarios', getArrendatariosLengthController);

//Perfil del inmueble
router.get('/profile', getProfileInfoController);

module.exports = router;