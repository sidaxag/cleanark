const express = require("express")
const mentors = require("../usecases/mentors.usecase")
const router = express.Router()

//endpoint

router.get("/", (require, response) => {
    const allMentors = mentors.getAll()
    response.json({
        message: "Get desde mentors",
        mentors: allMentors
    })
})

//crear un mentor
router.post("/", (request, response) => {
    const { name, email } = request.body
    mentors.create(name, email)
    response.json({
        message: "mentor created"
    })
})

//borrar

router.delete("/:name", (request, response) => {
    const { name } = request.params
    mentors.remove(name)
    response.json({
        message: "mentor pal lobby"
    })
})

module.exports = router