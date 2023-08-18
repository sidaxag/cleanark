const db = require("../lib/db")

function create(name, email, programa, generacion) {
    const newKoder = {
        name,
        email,
        programa,
        generacion
    }
    const data = db.getData()
    data.koders.push(newKoder)
    db.updateData(data)
}

function remove(name) {
    const data = db.getData()
    const newKoderList = data.koders.filter(koder => koder.name !== name)
    data.koders = newKoderList
    db.updateData(data)
}

function getAll() {
    const data = db.getData()
    return data.koders
}

module.exports = {
    create,
    remove,
    getAll
}