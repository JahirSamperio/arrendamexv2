const { Router } = require('express');
const {
    newArrendadorController
} = require('../../controllers/arrendadores/arrendadores');

const router = Router();

router.post('/add', newArrendadorController);

module.exports = router;