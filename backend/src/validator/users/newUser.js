const {check} = require('express-validator');
const {validateResult} = require('../../helpers/validateHelper');


const validateNewUser = [
    check("nombre", 'El nombre es obligatorio').exists().not().isEmpty(),
    check("apellidos", 'Los apellidos son obligatorios').exists().not().isEmpty(),
    check("email", 'El email es obligatorio').exists().not().isEmpty().isEmail(),
    check("password", 'La contraseña es obligatoria').exists().not().isEmpty(),
    check("telefono", 'El telefono es obligatorio').exists().not().isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = { validateNewUser }