const { Router } = require('express');
const {
    newContractController
} = require('../../controllers/contratos/contratos');

const router = Router();

router.post('/new', newContractController);

module.exports = router;