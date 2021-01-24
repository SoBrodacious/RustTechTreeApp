backdoor = require('../controller/backdoor.controller')

module.exports = function (app) {
    app.route(app.rootUrl + '/status')
        .get(backdoor.getStatus)
}
