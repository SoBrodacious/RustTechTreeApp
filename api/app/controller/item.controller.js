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
    var id = 1
    var output = { }
    output = await dfs(id, output)

    if (output) {
        res.status(200).json(output)
    } else {
        res.status(404).send()
    }
}

async function dfs(node, tree) {
    return await Item.findChildrenByParentId(node, tree, async function (childItemsData) {
        if (childItemsData.length > 0) {
            for (var i = 0; i < childItemsData.length; i++) {
                var child = childItemsData[i]
                tree[child.id] = {
                    name: child.name,
                    scrap_cost: child.scrap_cost,
                    tech_level: child.tech_level,
                    type: child.type,
                    parent: child.parent,
                }
                tree = await dfs(child.id, tree)
            }
        }
        return tree
    })
}
