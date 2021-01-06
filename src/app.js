'use strict'
var express = require('express');
var bodyparser = require('body-parser');
var app = express();
const cors = require('cors');

//archivos de rutas
var project_routes = require('./routes/product');

//middlewares
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');//en lugar del asterisco irian los dominios permitidos
   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
   next();
}); 

app.use(cors());
app.use( '/', project_routes);



//exports

module.exports = app;