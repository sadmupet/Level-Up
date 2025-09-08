
const audio = document.getElementById("kitty");
const boton = document.querySelector(".mostrarGato");


boton.addEventListener("click", () => {

    let colores = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5", "#F5FF33"];
    let indice = 0;

    setInterval(() => {
        boton.style.color = colores[indice];
        indice++;

        if (indice >= colores.length) indice = 0;
    }, 150);
    
    boton.textContent = "¡¡JAVASCRIPT ES MI PASION!!";
    audio.play()
    audio.loop = true;

});