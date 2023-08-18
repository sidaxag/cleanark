const fs = require("fs")//importar
const filepath = "db.json"

const defaultDB = {
    koders: [],
    mentors: [],
    generations: []
}

function createIfNotExist() {
    if (!fs.existsSync(filepath)) {
        fs.writeFileSync(filepath, JSON.stringify(defaultDB), "utf8")

    }
}

function getData() {
    return JSON.parse(fs.readFileSync(filepath, "utf8"))
}

function updateData(newData) {
    fs.writeFileSync(filepath, JSON.stringify(newData), "utf8")
}

module.exports = {
    createIfNotExist,
    getData,
    updateData
}
