const {conexion} = require('../../db/config');

//Selecciona inmuebles de un solo usuario
function getInmuebleByIdModel(id_usuario) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT inmuebles.* 
            FROM inmuebles 
            JOIN arrendador
            ON inmuebles.id_arrendador = arrendador.id
            JOIN usuarios
            ON arrendador.id_usuario = usuarios.id
            WHERE usuarios.id = '${id_usuario}'`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
            
    })
}

//Selecciona todos los inmuebles 
function getAllInmueblesModel() {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM inmuebles`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
            
    })
}

//Selecciona inmuebles con el nombre solicitado
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
//Filtro de renta o venta
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

//Inserta nuevo inmueble
function newInmuebleModel(data) {
    const {nombre, descripcion, tipoInmueble, id_arrendador, renta_venta, precio, precio_por_mes, pathImage} = data;
    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO inmuebles(nombre, descripcion, tipoInmueble, renta_venta, precio, pathImage)
            VALUES ('${nombre}', '${descripcion}', '${tipoInmueble}', '${renta_venta}', '${precio}', '${pathImage}')`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

//Selecciona inmueble por el tipo que es
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
    searchInmuebleByTypeModel,
    getAllInmueblesModel
}