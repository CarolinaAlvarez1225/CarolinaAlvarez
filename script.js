document.write("<h2>¡Contenido agregado por JavaScript!</h2>"); 

let imagenPagina =
document.getElementById("imagenPato");

imagenPato.addEventListener("click", function()
{
    console.log("You clicked the duckie, it floofed up!");
})

botonInicio = document.getElementById('boton');

window.addEventListener('scroll', funcionEjemplo);
    function funcionEjemplo() {
        console.log("Scroll aplicado");
    }
