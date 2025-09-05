
const form = document.getElementById("registerForm");
const pasword = document.getElementById("contraseña");
const confirmacion = document.getElementById("contraseña_confirm");
const correo = document.getElementById("correo");

form.addEventListener("submit", function(e) {
    if (pasword.value !== confirmacion.value) {
        e.preventDefault();
        alert("¡Las contraseñas no coinciden!");
        confirmacion.focus();
    }
})