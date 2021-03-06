'use strict'
let express = require('express');
let bodyparser = require('body-parser');
let app = express();
let cors = require('cors');
const path = require('path');


// Configurar cabeceras y cors-------------------------------------------------
/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000, https://koosapp.herokuapp.com');//en lugar del asterisco irian los dominios permitidos
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
 }); */
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['https://koosapp.herokuapp.com']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
/* app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': 'koosapp.herokuapp.com',
        'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization'
    });
}); */

app.use(cors({
    credentials: true,
    allowedHeaders: 'Access-Control-Allow-Origin, Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
    origin: true, //'https://koosapp.herokuapp.com',
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
}));

//archivos de rutas-------------------------------------------------
let project_routes = require('./routes/product');
let store_routes = require('./routes/store');
let users_routes = require('./routes/users');

//middlewares-------------------------------------------------
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());

//static files-------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));

//settings-------------------------------------------------
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
//app.engine('html', require('ejs').renderFile);



//CORS-------------------------------------------------
/*var corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));*/



//RUTAS-------------------------------------------------
//app.use(cors());
app.use('/api', users_routes);
app.use('/api/products', project_routes);
app.use('/api/stores', store_routes);



//exports

module.exports = app;