const {
    getArrendamientosService
} = require('../../services/arrendamientos/arrendamientos');

const getArrendamientosController = async (req, res) => {
    const { id_usuario } = req.query;
    try{
        const response = await getArrendamientosService(id_usuario);
        
        return res.status(200).json({
            response
        })

    } catch(err){
        return res.status(500).json({
            msg: 'Error'
        })
    }
}

module.exports = {
    getArrendamientosController
}