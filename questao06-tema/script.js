let temaEscuro = false;

function mudarTema() {

    if (temaEscuro == false) {

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        temaEscuro = true;

    } else {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        temaEscuro = false;
    }
}