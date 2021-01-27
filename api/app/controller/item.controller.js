const { permittedCrossDomainPolicies } = require('helmet')

Item = require('../model/item.model')

exports.getItem = async (req, res) => {
    const id = req.params.id

    await Item.findById(id, function (itemData) {
        if (itemData == null) {
            res.status(404).send()
        } else {
            res.status(200).json(itemData)
        }
    })
}
