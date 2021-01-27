
exports.findById = async function(id, callback) {
    const findSQL = 'SELECT * FROM item WHERE id = ?'

    await db.get(findSQL, [id], async function(err, row) {
        if (err) {
            callback(null)
        }
        callback(row)
    })
}