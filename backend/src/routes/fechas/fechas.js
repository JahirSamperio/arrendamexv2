const { Router } = require('express');

const {
    getUltimosPagosControllers
} = require('../../controllers/fechas/fechas');

const router = Router();

router.get('/lastpayments', getUltimosPagosControllers);


module.exports = router;