const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser')

module.exports = function () {
    // INITIALISE EXPRESS //
    const app = express();
    var jsonParser = bodyParser.json()
    app.use(helmet())
    app.use(morgan('common'))

    app.rootUrl = '/api/v1';

    // ROUTES //
    require('../app/routes/backdoor.routes.js')(app);

    return app;
};
