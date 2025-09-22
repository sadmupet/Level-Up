import Usuario from "./usuarios.js";


const form = document.getElementById("registerForm");
const password = document.getElementById("contraseña");
const confirmacion = document.getElementById("contraseña_confirm");
const edad = document.getElementById("edad");


form.addEventListener("submit", (e) => {
    
    e.preventDefault(); // evita el envio automatico del formulario. es lo mismo con los otros, si falla una validacion no se envia
    
    // validacion de que las contraseñas coincidan
    if (password.value !== confirmacion.value) { 
        e.preventDefault();
        alert("¡Las contraseñas no coinciden!");
        // confirmacion.textContent = "¡Las contraseñas no coinciden!"; el mensaje no se ve :'v
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

    // se crea una objeto usuario
    const nuevoUsuario = new Usuario(correo.value, password.value, parseInt(edad.value));

    // se guarda en el local storage
    nuevoUsuario.user_data_save();

    // de la funcion que esta en usuarios.js se valida si es estudiante o no
    if (nuevoUsuario.esEstudiante()){
        alert("¡Se registro como cuenta de estudiante!\n¡Obtiene un 20% de descuento en todas sus compras!");
    } else {
        alert("¡Registro existoso!");
    }

    // muestra a los usuarios del local storage
    console.log(Usuario.info_users());

    window.location.href = "firstpage.html"; // esto redirige a la pagina principal despues de registrarse
    
})
