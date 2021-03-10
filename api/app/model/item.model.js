
exports.findById = async function(id, callback) {
    const findSQL = 'SELECT * FROM item WHERE id = ?'

    await db.get(findSQL, [id], async function(err, row) {
        if (err) {
            callback(null)
        }
        callback(row)
    })
}

exports.findChildrenByParentId = async function(id, callback) {
    const findSQL = 'SELECT id, name, scrap_cost, tech_level, type, parent FROM item n LEFT JOIN path e ON n.id = e.child WHERE e.parent = ?'
    await db.all(findSQL, [id], async function(err, rows) {
        if (err) {
            await callback(null)
        }
        await callback(rows)
    })
}

exports.findAllItems = async function(callback) {
    const findSQL = 'SELECT id, name, scrap_cost, tech_level, type, parent FROM item n LEFT JOIN path e ON n.id = e.child'
    await db.all(findSQL, async function(err, rows) {
        if (err) {
            await callback(null)
        }
        await callback(rows)
    })
}
