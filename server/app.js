'use strict';

global.__basedir = __dirname;

require('dotenv-extended').load();

// ---------------------------------------------------------------------------------------

// Packages
const express = require('express');
const load = require('express-load');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
//const mongoose = require('mongoose');
const swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors');

// ---------------------------------------------------------------------------------------

// App Express
const app = express();

// ---------------------------------------------------------------------------------------

// Middlewares
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cors());

// ---------------------------------------------------------------------------------------

// swagger definition
var swaggerDefinition = {
    info: {
        title: 'Spotify Remote Api',
        version: '1.0.0',
        description: 'Description',
    },
    host: 'localhost:3000',
    basePath: '/',
};
// options for the swagger docs
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./**/routes/*.js'],// pass all in array 
};
// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', function (req, res) { res.setHeader('Content-Type', 'application/json'); res.send(swaggerSpec);});

// ---------------------------------------------------------------------------------------

// if (process.env.MONGO_DB) {

//     mongoose.connect(process.env.MONGO_DB);
//     mongoose.connection.on('open', () => {
//         console.log('A new connection has been pluged');
//     });

// }

// ---------------------------------------------------------------------------------------

// Express load
load('models', { cwd: 'app' })
    .then('helpers')
    .then('services')
    .then('controllers')
    .then('middlewares')
    .then('routes')
    .into(app);
// ---------------------------------------------------------------------------------------

// Catch not found and forward to error handler
app.use((req, res) => {

    res.status(500).json({
        error: 'Not found',
        url: req.url,
        method: req.method,
        query: req.query,
        params: req.params,
        statusCode: req.statusCode,
        statusMessage: req.statusMessage
    });

});

// ---------------------------------------------------------------------------------------

module.exports = app;
