const { response } = require('express');
const {conexion} = require('../../db/config');
const  request  = require('request');

const CLIENT = process.env.CLIENT;
const SECRET = process.env.SECRET;
const PAYPAL_API = 'https://api-m.sandbox.paypal.com';

const auth = { user: CLIENT, pass: SECRET }


function getPaymentInfo(id_inmueble) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT inmuebles.precio, arrendador.email_paypal, usuarios.nombre, usuarios.apellidos 
            FROM ((inmuebles 
                INNER JOIN arrendador ON inmuebles.id_arrendador = arrendador.id)
                INNER JOIN usuarios ON arrendador.id_usuario = usuarios.id)
                WHERE inmuebles.id = '${id_inmueble}'`,
                function (error, result, field) {
                    if (error) 
                    return reject(error);
                    const { precio, nombre, descripcion, email_paypal, tipoInmueble } = result[0];
                    resolve({ precio, nombre, descripcion, email_paypal, tipoInmueble });
                })
            })
        }

        
//***************PAGO ESTANDAR********************** */
        
const createPayment = async (req, res) => {
    const { id_inmueble } = req.query;
    const { precio, email_paypal, } = await getPaymentInfo(id_inmueble);
    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'MXN', //https://developer.paypal.com/docs/api/reference/currency-codes/
                value: precio
            },
            payee: {
                email: email_paypal
            }
        }],
        application_context: {
            brand_name: `Easy-Rentals.com`,
            landing_page: 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
            user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
            return_url: `http://localhost:3000/execute-payment`, // Url despues de realizar el pago
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

    request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
        auth,
        body: {},
        json: true
    }, (err, response) => {
        const payerName = `${response.body.data.payer.name.given_name} ${response.body.data.payer.name.surname}`;
        // res.json({ data: response.body })
        res.json({ payerName })
        // const id_usuario = await getIdUsuarioNombre();
    })
}






//***************SUSCRIPCIONES********************** */

// const createProduct = async (req, res) => {
//     const { id_inmueble } = req.query;
//     const { precio, nombre, descripcion, email_paypal, tipoInmueble } = await getPaymentInfo(id_inmueble);
//     const product = {
//         name: 'Alquiler de inmueble' ,
//         description: descripcion,
//         type: 'SERVICE',
//         category: 'SOFTWARE',
//         image_url: 'https://avatars.githubusercontent.com/u/15802366?s=460&u=ac6cc646599f2ed6c4699a74b15192a29177f85a&v=4'

//     }

//     //https://developer.paypal.com/docs/api/catalog-products/v1/#products_create
//     request.post(`${PAYPAL_API}/v1/catalogs/products`, {
//         auth,
//         body: product,
//         json: true
//     }, (err, response) => {
//         res.json({ data: response.body })
//     })
// }

// const createPlan = async (req, res) => {
//     const { id_inmueble } = req.query;
//     const { precio, nombre, descripcion, email_paypal, tipoInmueble } = await getPaymentInfo(id_inmueble);

//     const { body } = req
//     //product_id

//     const plan = {
//         name: 'Cuota mensual de arrendamiento',
//         product_id: body.product_id,
//         status: "ACTIVE",
//         billing_cycles: [
//             {
//                 frequency: {
//                     interval_unit: "MONTH",
//                     interval_count: 1
//                 },
//                 tenure_type: "REGULAR",
//                 sequence: 1,
//                 total_cycles: 12,
//                 pricing_scheme: {
//                     fixed_price: {
//                         value: precio, // PRECIO MENSUAL QUE COBRAS 3.30USD
//                         currency_code: "MXN"
//                     }
//                 }
//             }],
//         payment_preferences: {
//             auto_bill_outstanding: true,
//             setup_fee: {
//                 value: precio,
//                 currency_code: "MXN"
//             },
//             setup_fee_failure_action: "CONTINUE",
//             payment_failure_threshold: 3
//         },
//         taxes: {
//             percentage: "0", // 10USD + 10% = 11 USD
//             inclusive: false
//         }
//     }

//     request.post(`${PAYPAL_API}/v1/billing/plans`, {
//         auth,
//         body: plan,
//         json: true
//     }, (err, response) => {
//         res.json({ data: response.body })
//     })
// }


module.exports = {
    createPayment,
    executePayment
}

