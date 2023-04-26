const { Router } = require('express');

const {
    getUltimosPagosControllers,
    getPendientesControllers,
    getTotalPaymentsTodayControllers,
    getTotalPaymentsMonthControllers,
    getPendientesLengthControllers
} = require('../../controllers/fechas/fechas');

const router = Router();

router.get('/lastpayments', getUltimosPagosControllers);

router.get('/pendingpayments', getPendientesControllers);

router.get('/todaypayments', getTotalPaymentsTodayControllers);

router.get('/monthpayments', getTotalPaymentsMonthControllers);

router.get('/pendienteslength', getPendientesLengthControllers);

module.exports = router;
