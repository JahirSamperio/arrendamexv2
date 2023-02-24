const express = require('express');
const {vistaPrincipal, vistaTables, vistaNotifications, vistaBilling} = require('../controllers/PageControllers')
const router = express.Router();

router.get('/', vistaPrincipal);
router.get('/tables', vistaTables);
router.get('/billing', vistaBilling);

module.exports = {routes:router}