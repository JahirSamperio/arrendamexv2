const {conexion} = require('../../db/config');

function getInmuebleByIdModel(id_usuario) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * 
            FROM inmuebles 
            WHERE inmuebles.id_usuario = ?`,
            [id_usuario],
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
            
    })
}

function getInmuebleByNameModel(nombre) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * 
            FROM inmuebles i
            WHERE i.nombre
            LIKE '%${nombre}%'`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
            
    })
}

function searchInmuebleByRentaModel(renta_venta) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * 
            FROM inmuebles i
            WHERE i.renta_venta = '${renta_venta}'`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}
function newInmuebleModel(data) {
    const {nombre, descripcion, tipoInmueble, id_usuario, renta_venta, precio, precio_por_mes} = data;
    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO inmuebles(nombre, descripcion, tipoInmueble, renta_venta, precio)
            VALUES ('${nombre}', '${descripcion}', '${tipoInmueble}', '${renta_venta}', '${precio}')`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

function searchInmuebleByTypeModel(tipoInmueble) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * 
            FROM inmuebles i
            WHERE i.tipoInmueble = '${tipoInmueble}'`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}



module.exports = {
    getInmuebleByIdModel,
    getInmuebleByNameModel,
    searchInmuebleByRentaModel,
    newInmuebleModel,
    searchInmuebleByTypeModel
}