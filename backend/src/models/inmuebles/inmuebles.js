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
function newInmuebleModel(data, id_arrendador) {
    const {nombre, descripcion, tipoInmueble,  renta_venta, precio, pathImage, estado, municipio, colonia, latitud, longitud, superficie_total, antiguedad, num_baños, num_recamaras, num_estacionamientos, superficie_construida } = data;
    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO inmuebles(nombre, descripcion, tipoInmueble, renta_venta, precio, pathImage, id_arrendador, estado, municipio, colonia, latitud, longitud, superficie_total, antiguedad, num_baños, num_recamaras, num_estacionamientos, superficie_construida)
            VALUES ('${nombre}', '${descripcion}', '${tipoInmueble}', '${renta_venta}', '${precio}', '${pathImage}', '${id_arrendador}', '${estado}', '${municipio}', '${colonia}', '${latitud}', '${longitud}', '${superficie_total}', '${antiguedad}', '${num_baños}','${num_recamaras}', '${num_estacionamientos}', '${superficie_construida}')`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}
//Editar inmueble
function editInmuebleModel(data, id_inmueble) {
    const {nombre, descripcion, tipoInmueble, renta_venta, precio, pathImage, id_arrendador, estado, municipio, colonia, latitud, longitud, superficie_total, antiguedad, num_baños, num_recamaras, num_estacionamientos, superficie_construida} = data;
    return new Promise((resolve, reject) => {
        conexion.query(
            `UPDATE inmuebles
            SET nombre = '${nombre}', descripcion = '${descripcion}', tipoInmueble = '${tipoInmueble}', renta_venta = '${renta_venta}', precio = '${precio}', pathImage = '${pathImage}', id_arrendador = '${id_arrendador}',
            estado = '${estado}', municipio = '${municipio}', colonia = '${colonia}', latitud = '${latitud}', longitud = '${longitud}', superficie_total = '${superficie_total}', antiguedad = '${antiguedad}', num_baños = '${num_baños}', num_recamaras = '${num_recamaras}', num_estacionamientos = '${num_estacionamientos}', superficie_construida = '${superficie_construida}'
            WHERE inmuebles.id = '${id_inmueble}'`,
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

//********** SECCION DE MIS ARRENDAMIENTOS EN LA DASHBOARD **************/

//Arrendados
function getArrendatariosModel(id_usuario) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT usuarios_arrendatario.nombre AS nombreUsuario, usuarios_arrendatario.apellidos, usuarios_arrendatario.email, inmuebles.nombre, inmuebles.tipoInmueble, contratos.metodo_pago, contratos.total, contratos.fecha_pago 
            FROM contratos
            JOIN usuarios 
            AS usuarios_arrendatario
            ON contratos.id_usuario = usuarios_arrendatario.id
            JOIN inmuebles 
            ON contratos.id_inmueble = inmuebles.id
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

//Inmuebles informacion principal
function getInmuebleByArrendadorModel(id_usuario) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT inmuebles.nombre, inmuebles.precio, inmuebles.tipoInmueble, inmuebles.renta_venta
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

//Perfil del inmueble
function getProfileInfoModel(id_inmueble) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM inmuebles
            WHERE id = '${id_inmueble}'`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
            
    })
}

//Obtener id del arrendador para insertar en nuevo inmueble
function getArrendadorIdModel(id_usuario) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT arrendador.id
            FROM arrendador
            JOIN usuarios
            ON usuarios.id = arrendador.id_usuario
            WHERE usuarios.id = '${id_usuario}'`,
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
    getAllInmueblesModel,
    getArrendatariosModel,
    getInmuebleByArrendadorModel,
    editInmuebleModel,
    getProfileInfoModel,
    getArrendadorIdModel
}