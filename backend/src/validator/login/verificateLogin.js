const {check} = require('express-validator');
const {validateResult} = require('../../helpers/validateHelper');

const validateLogin = [
    check("email", 'El correo es obligatorio').exists().not().isEmpty().isEmail(),
    check("password", 'La contraseña es obligatoria').exists().not().isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = { validateLogin }
