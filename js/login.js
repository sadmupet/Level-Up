import Usuario from "./usuarios.js";


const form = document.getElementById("login-form");
const password = document.getElementById("contraseña");
const correo = document.getElementById("correo");

console.log(Usuario.info_users());

form.addEventListener("submit", (e) => {
    e.preventDefault(); // ya conocemos esta shet

    const user = Usuario.info_users();

    const user_find = user.find(user => user.correo === correo.value && user.contraseña === password.value);

    if(user_find) {
        alert("Inicio de sesion exitoso");
        alert("Bienvenido " + user_find.correo);
        window.location.href = "firstpage.html"; // redirigir a la pagina principal
    } else {
        alert("Correo o contraseña incorrectos");
    }

})