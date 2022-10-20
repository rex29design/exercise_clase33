const express = require("express")

const app = express()

let count = 0
const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send("OK")
})

app.get("/count", (req, res) => {
    count++
    res.send(`Han llegado ${count} peticiones.`)
})

server = app.listen(PORT, () => {
    console.log("Server running...");
})
server.on("error", e => {
    console.log(e);
})