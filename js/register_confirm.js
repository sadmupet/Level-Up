import Usuario from "./usuarios.js";


const form = document.getElementById("registerForm");
const password = document.getElementById("contraseña");
const confirmacion = document.getElementById("contraseña_confirm");
const correo = document.getElementById("correo");
const edad = document.getElementById("edad");

let usuarios = [];

form.addEventListener("submit", (e) => {
    
    e.preventDefault(); // Esto evita el envio del formulario asi se puede validar que se agregaron correctamente los usuarios
    
    // validacion de que las contraseñas coincidan
    if (password.value !== confirmacion.value) { 
        e.preventDefault();
        alert("¡Las contraseñas no coinciden!");
        confirmacion.focus();
        return;
    }
    
    // validacion de edad
    if (edad.value < 18) {
        e.preventDefault();
        alert("¡Usted debe ser mayor a 18 años!");
        window.location.href = "index.html";
        return;
    }

    // se crea una objeto usuario y se agrega al array de usuarios
    const nuevoUsuario = new Usuario(correo.value, password.value, parseInt(edad.value));
    usuarios.push(nuevoUsuario);

    // de la funcion que esta en usuarios.js se valida si es estudiante o no
    if (nuevoUsuario.esEstudiante()){
        alert("¡Se registro como cuenta de estudiante!\n¡Obtiene un 20% de descuento en todas sus compras!");
    } else {
        alert("¡Registro existoso!");
    }

    // esto resetea el formulario
    // form.reset(); // esto lo dejo como texto por si se usa despues...

    // y bno esto muestra a los usuarios, por eso esta puesto el e.preventDefault() al inicio
    console.log(usuarios);

    window.location.href = "firstpage.html"; // esto redirige a la pagina principal despues de registrarce
    
})
