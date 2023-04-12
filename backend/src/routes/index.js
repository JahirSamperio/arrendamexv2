const express = require('express');
const {
    createPayment,
    executePayment,
    createProduct,
    createPlan
} = require('../controllers/paypal/payments');

const app = express();

app.use('/users', require('./users/usersRoutes'));

// app.use('/', require('./users/usersRoutes'));

app.use('/inmueble', require('./inmuebles/inmuebles'));

app.use('/log', require('./login/login'));

app.use('/uploads', require('./uploads/uploads'));

app.use('/arrendadores', require('./arrendadores/arrendadores'));

app.use('/contratos', require('./contratos/contratos'));

//*******************Paypal******************** */

app.post('/create-payment', createPayment);

app.get('/execute-payment', executePayment);

//*******************Suscripciones******************** */

// app.post('/create-product', createProduct);

// app.post('/create-plan', createPlan);

module.exports = app;


