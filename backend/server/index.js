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

//POST Registro
app.post("/register", async (req,res) => {

    const {nombre, apellido, email, contrasenia} = req.body;

    const connectiondb = await ConnectionDataBase()

    await connectiondb.query("INSERT INTO `usuarios`(`idTipoUsuario`, `nombre`, `apellido`, `correoElectronico`, `contraseña`) VALUES (1,?,?,?,?)", [nombre, apellido, email, contrasenia])

    connectiondb.end()

    res.redirect("public/index.html")
})

//POST Guardar Coordenadas de alquiler
app.post("/save-coords", async (req,res) => {
    const {lat , lng} = req.body

    const connectiondb = await ConnectionDataBase()

    await connectiondb.query("INSERT INTO `alquileres` (`idTipoAlquiler`,`latitud`,`longitud`) VALUES (?,?,?)", [1,lat, lng])

    connectiondb.end()

})

app.listen(3000,console.log("Server Running in port" ,3000))