item = require('../controller/item.controller')

module.exports = function (app) {
    app.route(app.rootUrl + '/item/:id')
        .get(item.getItem)
}
