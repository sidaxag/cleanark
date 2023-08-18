//levantar el servidor
//iniciar la aplicacion
const server = require("./src/server")//para levantar el archivo server e iniciarlo
const db = require("./src/lib/db.js")

db.createIfNotExist()
server.listen(8080, () => {
    console.log("server listening on the port 8080")
})