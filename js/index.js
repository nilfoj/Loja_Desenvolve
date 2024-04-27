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

setInterval(atualizarBanner, 2000); /* Alterar o texto a cada 5 segundos */
