require('dotenv').config()
const express = require('./config/express.js')


const app = express()
const port = 4941

app.listen(port, function () {
    console.log(`Listening on port: ${port}`)
})