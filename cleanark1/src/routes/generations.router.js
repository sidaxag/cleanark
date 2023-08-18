const express = require("express")
const generations = require("../usecases/generations.usecase")
const router = express.Router()

//endpoint

//listar
router.get("/", (request, response) => {
    const allGenerations = generations.getAll()
    response.json({
        message: "GET desde router generations",
        generations: allGenerations
    })
})


//crear info de generacion

router.post("/", (request, response) => {
    const { program, number } = request.body
    generations.create(program, number)
    response.json({
        message: "info created"
    })
})

//delete
router.delete("/:program", (request, response) => {
    const { program } = request.params

    generations.remove(program)

    response.json({
        message: "info deleted"
    })
})




module.exports = router