const { response } = require('express');
const {conexion} = require('../../db/config');
const  request  = require('request');

const CLIENT = process.env.CLIENT;
const SECRET = process.env.SECRET;
const PAYPAL_API = 'https://api-m.sandbox.paypal.com';

const auth = { user: CLIENT, pass: SECRET }


function getPaymentInfo(id_inmueble, id_usuario) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT contratos.total, contratos.id, arrendador.email_paypal
                FROM contratos
                JOIN inmuebles
                ON contratos.id_inmueble = inmuebles.id 
                JOIN arrendador
                ON inmuebles.id_arrendador = arrendador.id
                WHERE (inmuebles.id = '${id_inmueble}')
                AND (contratos.id_usuario = '${id_usuario}')`,
                function (error, result, field) {
                    if (error) 
                    return reject(error);
                    const { total, id, email_paypal } = result[0];
                    resolve({ total, id, email_paypal });
                })
            })
}


//***************PAGO ESTANDAR********************** */
        
const createPayment = async (req, res) => {
    const { id_inmueble, id_usuario } = req.query;          //**AQUI VA IR LO DE ENVIAR EL ID DEL ARRENDADOR PARA QUE SEPA QUE CONTRATO ES EL SUYO */
    const { total, id, email_paypal,  } = await getPaymentInfo(id_inmueble, id_usuario);
    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'MXN', //https://developer.paypal.com/docs/api/reference/currency-codes/
                value: total
            },
            payee: {
                email: email_paypal
            }
        }],
        application_context: {
            brand_name: `Easy-Rentals.com`,
            landing_page: 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
            user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
            return_url: `http://localhost:3000/execute-payment?id_contrato=${id}`, // Url despues de realizar el pago
            cancel_url: `http://localhost:3000/cancel-payment` // Url despues de realizar el pago
        }
    }
    //https://api-m.sandbox.paypal.com/v2/checkout/orders [POST]

    request.post(`${PAYPAL_API}/v2/checkout/orders`, {
        auth,
        body,
        json: true
    }, (err, response) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al crear el pago');
        //   } else {
        //     res.json({ data: response.body });
        //   }
        }
        else {
            const approveLink = response.body.links.find((link) => link.rel === "approve");
            res.json({ approveUrl: approveLink.href });
          }
    })
}

//Funcion para capturar el dinero
const executePayment = async (req, res) => {
    const token = req.query.token;
    const { id_contrato } = req.query; 
    
    request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
        auth,
        body: {},
        json: true
    }, (err, response) => {
        const id_paypal = response.body.id;
        const status_paypal = response.body.status;
        const email_payer = response.body.payer.email_address;
        const total_paypal = response.body.purchase_units[0].payments.captures[0].amount.value;
        const fechaHora = response.body.purchase_units[0].payments.captures[0].create_time;
        const fecha = fechaHora.substring(0, 10);
        try{
            return new Promise((resolve, reject) => {
                conexion.query(
                    `INSERT INTO pagos_paypal (id_payment, status, total, fecha, id_contrato)
                    VALUES ('${id_paypal}', '${status_paypal}', '${total_paypal}', '${fecha}',
                    '${id_contrato}')`,
                    function (error, result, field) {
                        if (error) 
                            return reject(error);
                        return resolve(result);
                    }) 
                    res.json({ data: response.body })
            })
        } catch (error){
            return res.status(500).json({
                msg: 'Error en el servidor'
            })
        } 
    })
}

module.exports = {
    createPayment,
    executePayment
}

