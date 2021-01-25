require('dotenv').config()
const express = require('./config/express.js')

const app = express()
const port = 4941

var mongodb = require('./config/db.js')
var db = mongodb()

app.listen(port, function () {
  console.log(`Listening on port: ${port}`)
})
