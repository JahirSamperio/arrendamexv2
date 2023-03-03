const {
    logUserServices
} = require('../../services/login/login');

const logUserControllers = async (req = request, res = response) => {
    const {email, password} = req.body;
    try {
        let response = await logUserServices(email, password);
        
        return res.status(200).json({
            response
        })
    } catch (err) {
        return res.status(500).json({
            msg: 'Information coult get'
        })
    }
}