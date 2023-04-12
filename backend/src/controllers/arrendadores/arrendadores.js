const {
    newArrendadorServices
} = require('../../services/arrendadores/arrendadores');

//Datos para agregar un arrendador

const newArrendadorController = async (req, res) => {
    try {
        const {email_paypal, num_contacto, id_usuario} = req.body;
             
        let response = await newArrendadorServices(req.body);

        return res.status(200).json({
            response
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error en el servidor'
        })
    }
}

module.exports ={
    newArrendadorController
}