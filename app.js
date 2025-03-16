
let amigos = [];
let sorteoHecho = false;

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }

    let nombreModificado = nombreBienEscrito(nombreAmigo);

    if (sorteoHecho) {
        amigos = [];
        document.getElementById('listaAmigos').innerHTML = "";
        document.getElementById('resultado').innerHTML = "";
        sorteoHecho = false; // Se reinicia el estado del sorteo
    }

    amigos.push(nombreModificado);

    actualizarListaAmigos();
    limpiarCampo();
}

function limpiarCampo() {
    document.getElementById('amigo').value = '';
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    for (let i=0; i<amigos.length; i++) {
        let nuevoAmigo = document.createElement('li'); // Se crea un nuevo elemento li
        nuevoAmigo.textContent = amigos[i]; // Se asigna el ultimo amigo agregado
        listaAmigos.appendChild(nuevoAmigo); // Se añade el amigo a la lista en HTML
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceAleatorio]; // Se obtiene el amigo sorteado

    document.getElementById('resultado').innerHTML = `<li>${amigoSorteado}</li>`;

    sorteoHecho = true;
}

// Esta funcion: donde /.../ indican una expresion regular de JavaScript
// /g realiza una busqueda global
// (^|\s)\S busca la primera letra de cada palabra (ya sea al inicio ^ o después de un espacio \s)
function nombreBienEscrito(nombre) {
    return nombre
        .toLowerCase()
        .replace(/(^|\s)\S/g, letra => letra.toUpperCase());
}