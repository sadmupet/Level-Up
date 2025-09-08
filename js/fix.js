
const audio = document.getElementById("el-circo");
const boton = document.querySelector(".mostrarPayaso");

boton.addEventListener("click", () => {

    audio.play();
    audio.loop = true;

});
