const { Router } = require('express');
const {
    getInformationUserController,
    newUserController,
    editUserController
} = require('../../controllers/usuarios');

const router = Router();

router.get('/information', getInformationUserController);

router.post('/newUser', newUserController);

router.post('/editUser', editUserController);




// router.get('/newUsuer', getInformationUserController);




module.exports = router;