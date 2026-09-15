let contador = 0;

function incrementarContador() {

    contador++;

    document.getElementById("contador").innerHTML = contador;
}

function zerarContador() {

    contador = 0;

    document.getElementById("contador").innerHTML = contador;
}