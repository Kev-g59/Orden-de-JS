// Guardddo de nombres
let nombres = [];


// Agrega el nombre al presionar el boton
function agregarNombre() {
  // Leer el nombre de la caja de texto
    let nombre = document.getElementById("nombre").value.trim();

    // Si la caja está vacía no se agrega nada obviamente
    if (nombre === "") {
        return;
    }

    // Guardar el nombre en el arreglo
    nombres.push(nombre);

    // Orden de los nombres con sort
    nombres.sort((a, b) => a.localeCompare(b));

    document.getElementById("listaNombres").value = nombres.join("\n");

    document.getElementById("nombre").value = "";
}



// Se ejecuta al presionar "Limpiar"
function limpiar() {
    nombres = [];
    document.getElementById("listaNombres").value = "";
}


// Eventos de los botones
let botonAgregar = document.getElementById("botonAgregar");
botonAgregar.addEventListener("click", agregarNombre);

let botonLimpiar = document.getElementById("botonLimpiar");
botonLimpiar.addEventListener("click", limpiar);
