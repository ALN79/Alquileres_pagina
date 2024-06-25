const formRegister = document.getElementById("registerForm")

//Funcion De Registro
const register = async (e) => {

    e.preventDefault()

    const nombre = document.getElementById("name").value
    const apellido = document.getElementById("surname").value
    const email = document.getElementById("registerEmail").value
    const contrasenia = document.getElementById("registerPassword").value

    function eliminarAlertas() {
        const alertaExistente = document.getElementById("alertaRegistro");
        if (alertaExistente) {
            alertaExistente.remove();
        }
    }
    
    eliminarAlertas()

    if (!nombre) {
        const labelName = document.getElementById("labelName")

        if (!document.getElementById("alertaRegistro")) {
            const alerta = document.createElement("p")

            alerta.innerText = "Complete el Nombre"

            alerta.style.color = "red"

            alerta.id = "alertaRegistro"

            labelName.appendChild(alerta)
        }
    }
    else if(!apellido) {
        const labelSurName = document.getElementById("labelSurName")

        if (!document.getElementById("alertaRegistro")) {
            const alerta = document.createElement("p")

            alerta.innerText = "Complete el Apellido"

            alerta.style.color = "red"

            alerta.id = "alertaRegistro"

            labelSurName.appendChild(alerta)
        }
    }
    else if(!email) {
        const labelEmail = document.getElementById("labelEmail")

        if (!document.getElementById("alertaRegistro")) {
            const alerta = document.createElement("p")

            alerta.innerText = "Complete el Correo Electronico"

            alerta.style.color = "red"

            alerta.id = "alertaRegistro"

            labelEmail.appendChild(alerta)
        }
    }
    else if(!contrasenia) {
        const labelPassword = document.getElementById("labelPassword")

        if (!document.getElementById("alertaRegistro")) {
            const alerta = document.createElement("p")

            alerta.innerText = "Complete la Contraseña"

            alerta.style.color = "red"

            alerta.id = "alertaRegistro"

            labelPassword.appendChild(alerta)
        }
    }


    else {
        const peticionRegistro = await fetch('http://localhost:3000/register', {
            method: 'POST',
            body: JSON.stringify({ nombre, apellido, email, contrasenia }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        window.location.href = "index.html"
    }
}

formRegister.addEventListener('submit', register);




