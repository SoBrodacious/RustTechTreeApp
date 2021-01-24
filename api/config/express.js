const express = require('express');

module.exports = function () {
    // INITIALISE EXPRESS //
    const app = express();


    app.rootUrl = '/api/v1';

    // ROUTES //
    // example == require('../app/routes/backdoor.routes')(app);

    return app;
};
