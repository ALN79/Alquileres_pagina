const formRegister = document.getElementById("registerForm")

const register = async (e) => {

    e.preventDefault()

    const nombre = document.getElementById("name").value
    const apellido = document.getElementById("surname").value
    const email = document.getElementById("registerEmail").value
    const contrasenia = document.getElementById("registerPassword").value

    const peticion = await fetch('http://localhost:3000/register', {
        method: 'POST',
        body: JSON.stringify({nombre, apellido, email, contrasenia}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    window.location.href = "index.html" 
}

formRegister.addEventListener('submit', register);




