const { Router } = require('express');
const {
    logUserControllers
} = require('../../controllers/login/login');

const router = Router();

router.get('/login', logUserControllers);


module.exports = router;