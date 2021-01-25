const MongoClient = require('mongodb').MongoClient
const uri =
    'mongodb+srv://Kyran:R31dr4n12@rustapp.bzk0z.mongodb.net/RustApp?retryWrites=true&w=majority'
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10,
})

module.exports = function () {
    try {
        client.connect((err, db) => {
            const collection = client.db('test').collection('devices')
            console.log('Db connection pool created')

            return db
        })
    } finally {
        client.close()
    }
}
