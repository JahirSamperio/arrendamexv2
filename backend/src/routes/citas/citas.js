const { Router } = require('express');

const {
    createCitaController,
    getCitaController,
    sendCitaController,
    getCitaAceptadaController,
    deleteCitaController,
    citasSolicitadasLengthController
} = require('../../controllers/citas/citas');

const router = Router();

//Crea citas en tabla de citas_solicitadas
router.post('/createcita', createCitaController);

//Obtiene los datos de la citas solicitadas
router.get('/getcita', getCitaController);

//Aprueba las citas solicitadas y las manda a la tabla citas_aceptadas
router.post('/sendcita', sendCitaController);

//Rechaza las citas solicitadas
router.delete('/deletecita', deleteCitaController);

//Obtiene los datos de la citas aceptadas
router.get('/getcitaaceptada', getCitaAceptadaController);

//Numero de citas pendientes
router.get('/numpendientes', citasSolicitadasLengthController);

module.exports = router;