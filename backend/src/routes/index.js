const express = require('express');

const app = express();

app.use('/users', require('./users/usersRoutes'));

app.use('/', require('./users/usersRoutes'));

app.use('/inmueble', require('./inmuebles/inmuebles'));

app.use('/log', require('./login/login'));

app.use('/uploads', require('./uploads/uploads'));

module.exports = app;



