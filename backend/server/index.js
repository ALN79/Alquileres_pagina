//Requerir dependencias
const express = require("express")
const path = require("path")
const cors = require('cors');
const morgan = require('morgan');
app = express()

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../public")));

//Conexión base de datos
const {ConnectionDataBase} = require("../database/connectiondb")

//rutas y controladores
app.post("/register", async (req,res) => {

    const {nombre, apellido, email, contrasenia} = req.body;

    const connectiondb = await ConnectionDataBase()

    await connectiondb.query("INSERT INTO `usuarios`(`idTipoUsuario`, `nombre`, `apellido`, `correoElectronico`, `contraseña`) VALUES (1,?,?,?,?)", [nombre, apellido, email, contrasenia])

    connectiondb.end()

    res.redirect("public/index.html")
})

app.listen(3000,console.log("Server Running in port" ,3000))