// Banner_01
const texto1 = document.getElementById("app20");
const texto2 = document.getElementById("frete");

let mostrarTexto2 = false;

function atualizarBanner() {
    if (mostrarTexto2) {
        texto1.style.display = "none";
        texto2.style.display = "block";
    } else {
        texto1.style.display = "block";
        texto2.style.display = "none";
    }

    mostrarTexto2 = !mostrarTexto2;
}


// Banner_02

setInterval(atualizarBanner, 2000); /* Alterar o texto a cada 5 segundos */

const imagens = document.querySelectorAll('.banner-image');
const intervalo = 5000; // Tempo em milissegundos (5 segundos)
let indiceAtual = 0;

function mostrarImagem(indice) {
    imagens.forEach(imagem => imagem.classList.remove('active'));
    imagens[indice].classList.add('active');
}

mostrarImagem(indiceAtual);

setInterval(() => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    mostrarImagem(indiceAtual);
}, intervalo);
