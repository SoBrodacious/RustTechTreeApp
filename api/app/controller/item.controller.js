const { permittedCrossDomainPolicies } = require('helmet')
const FileReader = require('filereader')
const File = require('File')
const fs = require('fs')

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
            output = []
            for (var i in itemsData) {
                if (
                    fs.existsSync(
                        '././static/rusticons/' +
                            itemsData[i].id +
                            '-' +
                            itemsData[i].name +
                            '.png'
                    )
                ) {
                    var base64Image = base64_encode(
                        '././static/rusticons/' +
                            itemsData[i].id +
                            '-' +
                            itemsData[i].name +
                            '.png'
                    )
                } else {
                    var base64Image = ''
                }
                output.push({
                    id: itemsData[i].id,
                    data: {
                        name: itemsData[i].name,
                        scrap_cost: itemsData[i].scrap_cost,
                        tech_level: itemsData[i].tech_level,
                        type: itemsData[i].type,
                        image: base64Image,
                        parent: itemsData[i].parent,
                    },
                })
            }

            res.status(200).json(output)
        }
    })
}

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file)
    // convert binary data to base64 encoded string
    return Buffer.from(bitmap).toString('base64')
}
