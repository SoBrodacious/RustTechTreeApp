item = require('../controller/item.controller')

module.exports = function (app) {
    app.route(app.rootUrl + '/item/:id')
        .get(item.getItem)
    app.route(app.rootUrl + '/item/:id/children')
        .get(item.getItemChildren)
    app.route(app.rootUrl + '/tree/')
        .get(item.getTree)
}
