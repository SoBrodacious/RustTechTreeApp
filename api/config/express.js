const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')

module.exports = function () {
    // INITIALISE EXPRESS //
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(helmet())
    app.use(morgan('common'))

    app.rootUrl = '/api/v1';

    // ROUTES //
    require('../app/routes/backdoor.routes')(app);
    require('../app/routes/item.routes')(app)

    return app;
};
