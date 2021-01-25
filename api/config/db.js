const sqlite3 = require('sqlite3').verbose()

let db;

exports.createDbCon = () => {
    // open the database
    db = new sqlite3.Database(
        './db/rusttechtree.sqlite3',
        (err) => {
            if (err) {
                throw new Error(err.message)
            }
            console.log('Connected to the database.')
        }
    )
    return db
}

exports.closeDbCon = () => {
    db.close((err) => {
        if (err) {
            throw new Error('Failed to disconnect from db')
        }
        console.log("Disconnected from the database")
    })
}
