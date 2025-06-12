class Jugador {
    constructor(nombre, numCamiseta, edad, arquero, equipo, goles) {
        this.nombre = nombre;
        this.numCamiseta = numCamiseta;
        this.edad = edad;
        this.arquero = arquero;
        this.equipo = equipo;
        this.goles = goles;
        this.precioVenta = goles * 5000; // Cada gol vale $5000
    }

    mostrarDatos() {
        return `Jugador: ${this.nombre}, Camiseta ${this.numCamiseta}, 
                Edad: ${this.edad}, Equipo: ${this.equipo}, 
                Goles: ${this.goles}, Precio: $${this.precioVenta}`;
    }
}

let jugadores = [];

function agregarJugador() {
    let nombre = document.getElementById("nombreJugador").value;
    let numCamiseta = parseInt(document.getElementById("numCamiseta").value);
    let edad = parseInt(document.getElementById("edadJugador").value);
    let arquero = document.getElementById("arquero").checked;
    let equipo = document.getElementById("equipoJugador").value;
    let goles = parseInt(document.getElementById("golesJugador").value);

    if (nombre.length < 4 || numCamiseta < 1 || numCamiseta > 40) {
        alert("Error: Nombre muy corto o número de camiseta inválido.");
        return;
    }

    let precioVenta = goles * 5000;

    let listaModal = document.getElementById("listaModal");
    listaModal.innerHTML = `
        <li><strong>Jugador:</strong> ${nombre}</li>
        <li><strong>Camiseta:</strong> ${numCamiseta}</li>
        <li><strong>Edad:</strong> ${edad}</li>
        <li><strong>Equipo:</strong> ${equipo}</li>
        <li><strong>Goles:</strong> ${goles}</li>
        <li><strong>Precio:</strong> $${precioVenta}</li>
    `;

    // Mostramos el modal solo después de ingresar los datos
    document.getElementById("modal").style.display = "flex";

    // Vaciar el formulario después de agregar jugador
    document.getElementById("nombreJugador").value = "";
    document.getElementById("numCamiseta").value = "";
    document.getElementById("edadJugador").value = "";
    document.getElementById("arquero").checked = false;
    document.getElementById("equipoJugador").value = "";
    document.getElementById("golesJugador").value = "";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}


function actualizarLista() {
    let lista = document.getElementById("listaJugadores");
    lista.innerHTML = "";

    jugadores.forEach(jugador => {
        let div = document.createElement("div");
        div.textContent = jugador.mostrarDatos();
        lista.appendChild(div);
    });
}
