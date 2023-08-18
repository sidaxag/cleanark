//crear router para koders

const express = require("express")
const koders = require("../usecases/koders.usecase")

const router = express.Router()


//listar
router.get("/", (request, response) => {
    const allKoders = koders.getAll()
    response.json({
        messgae: "GET koders",
        koders: allKoders
    })
})

//crear un koder

router.post("/", (request, response) => {
    const { name, email, program, generation } = request.body
    koders.create(name, email, program, generation)
    response.json({
        message: "koder created"
    })
})

//borrar

router.delete("/:name", (request, response) => {
    const { name } = request.params

    koders.remove(name)

    response.json({
        message: "koder deleted"
    })
}
)
module.exports = router