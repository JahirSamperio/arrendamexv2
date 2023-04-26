const {
    createCitaServices,
    getCitaServices,
    sendCitaServices,
    getCitaAceptadaServices,
    deleteCitaServices,
    citasSolicitdasLengthServices
} = require('../../services/citas/citas');

const createCitaController = async (req, res) => {
    try{
        const data = req.body;
        let response = await createCitaServices(req.body);
        return res.status(200).json({
            response
        })
    } catch(err){
        return res.status(500).json({
            msg: 'Information error'
        })
    }
}

const getCitaController = async (req, res) => {
    try{
        const {id_usuario} = req.query;
        let response = await getCitaServices(id_usuario);
        return res.status(200).json({
            response
        })
    } catch(err){
        return res.status(500).json({
            msg: 'Information error'
        })
    }
}

const sendCitaController = async (req, res) => {
    try{
        const data = req.body;
        let response = await sendCitaServices(req.body);
        return res.status(200).json({
            response
        })
    } catch(err){
        return res.status(500).json({
            msg: 'Information error'
        })
    }
}

const getCitaAceptadaController = async (req, res) => {
    try{
        const {id_usuario} = req.query;
        let response = await getCitaAceptadaServices(id_usuario);
        return res.status(200).json({
            response
        })
    } catch(err){
        return res.status(500).json({
            msg: 'Information error'
        })
    }
}

const citasSolicitadasLengthController = async (req, res) => {
    try{
        const {id_usuario} = req.query;
        let response = await citasSolicitdasLengthServices(id_usuario);
        return res.status(200).json({
            response
        })
    } catch(err){
        return res.status(500).json({
            msg: 'Information error'
        })
    }
}

const deleteCitaController = async (req, res) => {
    try{
        const {id_cita} = req.query;
        let response = await deleteCitaServices(id_cita);
        return res.status(200).json({
            response
        })
    } catch(err){
        return res.status(500).json({
            msg: 'Information error'
        })
    }
}

module.exports = {
    createCitaController,
    getCitaController,
    sendCitaController,
    getCitaAceptadaController,
    deleteCitaController,
    citasSolicitadasLengthController
}