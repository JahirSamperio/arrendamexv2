const { Router } = require('express');
const {
    createPayment,
    executePayment
} = require('../../controllers/paypal/payments');

const router = Router();

router.post('', createPayment);

// router.get('/execute-payment', executePayment)

module.exports = router;