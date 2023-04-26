const { response, request } = require("express");

const {
    logUserServices
} = require('../../services/login/login');

const logUserControllers = async (req = request, res = response) => {
    const {email, password} = req.query;
    try {
        let response = await logUserServices(email, password);
        
        if(response.length === 0){
            return res.status(404).json({
                msg: "User not found"
            })
        }
        return res.status(200).json({
            response: response[0]
        })
    } catch (err) {
        return res.status(500).json({
            msg: 'Information coult get'
        })
    }
}

module.exports = {
    logUserControllers
}