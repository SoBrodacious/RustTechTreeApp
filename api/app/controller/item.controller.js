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

exports.getItemChildren = async (req, res) => {
    const id = req.params.id

    await Item.findChildrenByParentId(id, function (childItemsData) {
        if (childItemsData == null) {
            res.status(404).send()
        } else {
            res.status(200).json(childItemsData)
        }
    })
}

exports.getTree = async (req, res) => {
    await Item.findAllItems(function (itemsData) {
        if (itemsData == null) {
            res.status(404).send()
        } else {
            output = {}
            for (var i in itemsData) {
                output[itemsData[i].id] = {
                    name: itemsData[i].name,
                    scrap_cost: itemsData[i].scrap_cost,
                    tech_level: itemsData[i].tech_level,
                    type: itemsData[i].type,
                    parent: itemsData[i].parent,
                }
            }

            res.status(200).json(output)
        }
    })
}
