const {
    getUltimosPagosServices
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

module.exports = {
    getUltimosPagosControllers
}