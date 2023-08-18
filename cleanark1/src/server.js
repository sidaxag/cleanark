//describir el servidor
//const app =express y sus middlewares
const express = require("express")
const kodersRouter = require("./routes/koders.router")
const generationsRouter = require("./routes/generations.router")
const mentorsRouter = require("./routes/mentors.router")


const app = express()

app.use(express.json()) //para poder usar json o montar

app.use("/koders", kodersRouter)
app.use("/generations", generationsRouter)
app.use("/mentors", mentorsRouter)

app.get("/", (request, response) => {
    response.json({
        message: "Api kodemia"
    })
})


module.exports = app