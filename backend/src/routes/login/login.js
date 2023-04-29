const { Router } = require('express');
const { logUserControllers } = require('../../controllers/login/login');
const { validateLogin } = require('../../validator/login/verificateLogin');

const router = Router();

router.post('/login', logUserControllers);


module.exports = router;