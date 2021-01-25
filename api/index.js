require('dotenv').config()
const express = require('./config/express.js')

const app = express()
const port = 4941

var db_init = require('./config/db.js')

db_init.createDbCon()

app.listen(port, function () {
    console.log(`Listening on port: ${port}`)
})
