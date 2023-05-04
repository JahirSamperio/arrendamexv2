const {
    getUltimosPagosServices,
    getPendientesServices,
    getTotalPaymentsTodayService,
    getTotalPaymentsMonthService,
    getPendientesLengthService
} = require('../../services/fechas/fechas');

const getUltimosPagosControllers = async (req, res) => {
    try{
        const { id_usuario } = req.query;
        let response = await getUltimosPagosServices(id_usuario);
        return res.status(200).json({
            response
        })
    } catch(err){
        return res.status(500).json({
            msg: 'Information not get'
        })
    }
}

const getPendientesControllers = async (req, res) => {
    try{
        const { id_usuario } = req.query;
        let response = await getPendientesServices(id_usuario);
        return res.status(200).json({
            response
        })
    } catch(err){
        return res.status(500).json({
            msg: 'Information not get'
        })
    }
}

const getTotalPaymentsTodayControllers = async (req, res) => {
    try{
        const { id_usuario } = req.query;
        let today = await getTotalPaymentsTodayService(id_usuario);
        let response = today[0];
        console.log(response)
        return res.status(200).json({
            response
        })
    } catch(err){
        return res.status(500).json({
            msg: 'Information not get'
        })
    }
}

const getTotalPaymentsMonthControllers = async (req, res) => {
    try{
        const { id_usuario } = req.query;
        let response = await getTotalPaymentsMonthService(id_usuario);
        return res.status(200).json({
            response
        })
    } catch(err){
        return res.status(500).json({
            msg: 'Information not get'
        })
    }
}
const getPendientesLengthControllers = async (req, res) => {
    try{
        const { id_usuario } = req.query;
        let response = await getPendientesLengthService(id_usuario);
        return res.status(200).json({
            response
        })
    } catch(err){
        return res.status(500).json({
            msg: 'Information not get'
        })
    }
}

module.exports = {
    getUltimosPagosControllers,
    getPendientesControllers,
    getTotalPaymentsTodayControllers,
    getTotalPaymentsMonthControllers,
    getPendientesLengthControllers
}