const express = require('express');
const cors = require('cors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const { dbConnection } = require("../db/config")

const router = require('../routes/routes');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.corsOptions = {
            origin: "http://127.0.0.1:5173",
            optionsSuccessStatus: 200,
        };

        //conectar base de datos
        this.conectarDB();

        //middlewares
        this.middleware();

        //rutas de mi aplicacion
        this.routes();
    }

    async conectarDB() {
        try {
            dbConnection();
            console.log("Database online");
        } catch (error) {
            throw new Error(error);
        }
    }

    middleware() {
        //CORS
        this.app.use(cors(this.corsOptions));

        // Lectura y parseo del body
        this.app.use(express.json());

        //dashboard
        this.app.set('view engine', 'ejs');
        this.app.use(expressLayouts);
        this.app.use(router.routes);

        //inicio
        this.app.use(express.static(path.join(__dirname, '../public')));
    }

    routes() {
        this.app.use(require("../routes/index"));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en port', this.port);
        })
    }

}

module.exports = Server;