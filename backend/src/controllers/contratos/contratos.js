const {
    newContractServices
} = require('../../services/contratos/contratos');

const newContractController = async (req = request, res) => {
    try {
        const {id_arrendador, fecha_pago, total, id_inmueble, id_arrendado} = req.body;
        let response = await newContractServices(req.body);
        
        return res.status(200).json({
            response
        })

    } catch (error) {
        return res.status(500).json({
            msg: 'Information could not get'
        })
    }
}

module.exports = {
    newContractController
}