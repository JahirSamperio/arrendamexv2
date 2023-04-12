const { Router } = require('express');
const {
    getInformationUserController,
    newUserController,
    editUserController,
    getInformationUserControllerByName,
    deleteUserController
} = require('../../controllers/usuarios');

const {
    validateNewUser
} = require('../../validator/users/newUser')

const router = Router();

router.get('/information', getInformationUserController);

router.get('/informationName', getInformationUserControllerByName);

router.post('/newUser', newUserController);

router.post('/editUser', editUserController);

router.post('/deleteUser', deleteUserController);




// router.get('/newUsuer', getInformationUserController);




module.exports = router;