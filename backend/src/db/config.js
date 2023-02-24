const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'arrendamex',
    user: 'root',
    password: 'root',
});

const dbConnection = () => {
    conexion.connect(function (err) {
        if (err) {
            console.error('Error de conexion: ' + err.stack);
            return;
        }
        console.log('Conectado con el identificador ' + conexion.threadId);
    });
}

module.exports = {
    dbConnection,
    conexion
}
