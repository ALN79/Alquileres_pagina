const express = require("express")
const path = require("path")
app = express()

app.use(express.static(path.join(__dirname, "../public")));

app.get("/inicio", (req,res) => {
    res.sendFile(path.join(__dirname, "../public" , "index.html"))
})
app.get("/alquileres", (req,res) => {
    res.sendFile(path.join(__dirname,"../public" , "alquileresCatalogo.html"))
})
app.get("/contacto", (req,res) => {
    res.sendFile(path.join(__dirname,"../public" , "contacto.html"))
})

app.listen(3000,console.log("Server Running in port" ,3000))