import Usuario from "./usuarios.js";


const form = document.getElementById("registerForm");
const password = document.getElementById("contraseña");
const confirmacion = document.getElementById("contraseña_confirm");
const correo = document.getElementById("correo");
const edad = document.getElementById("edad");

let usuarios = [];

form.addEventListener("submit", (e) => {
    
    e.preventDefault();
    if (password.value !== confirmacion.value) {
        e.preventDefault();
        alert("¡Las contraseñas no coinciden!");
        confirmacion.focus();
        return;
    }

    if (edad.value < 18) {
        e.preventDefault();
        alert("¡Usted debe ser mayor a 18 años!");
        window.location.href = "index.html";
        return;
    }

    const nuevoUsuario = new Usuario(correo.value, password.value, parseInt(edad.value));
    usuarios.push(nuevoUsuario);

    if (nuevoUsuario.esEstudiante()){
        alert("¡Se registro como cuenta de estudiante!\n¡Obtiene un 20% de descuento en todas sus compras!");
    } else {
        alert("¡Registro existoso!");
    }

    form.reset();

    console.log(usuarios);

})
