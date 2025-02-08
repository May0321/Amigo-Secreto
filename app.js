// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === '') {
        alert ('Porfavor, inserte un nombre');
        return;
    }
    amigos.push (nombreAmigo);

    actualizarLista();

    inputAmigo.value = '';
    inputAmigo.focus();
}

function actualizarLista() {
    let listaAmigoUL = document.getElementById('listaAmigos');
    listaAmigoUL.innerHTML = '';
    amigos.forEach(amigo => {
     let li = document.createElement('li');
     li.textContent = amigo;
     listaAmigoUL.appendChild(li); 
    }); 

}

function sortearAmigo() {
    if (amigos.length === 0) {
    alert ('No hay amigos, porfavor inserte un nombre!!');
    return;
    }

    let indiceAleatorio = Math.floor(Math.random () * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultadoUL = document.getElementById('resultado');
    resultadoUL.innerHTML =(`<li>${amigoSorteado}</li>`);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnAdicionar').addEventListener('click', agregarAmigo);
    document.getElementById('btnSortear').addEventListener('click' , sortearAmigo);
});
 
