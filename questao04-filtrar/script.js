function filtrarNomes() {

    let textoDigitado =
        document.getElementById("filtro").value.toLowerCase();

    let nomes =
        document.getElementsByTagName("li");

    for (let i = 0; i < nomes.length; i++) {

        let nomeAtual =
            nomes[i].textContent.toLowerCase();

        if (nomeAtual.startsWith(textoDigitado)) {

            nomes[i].style.display = "list-item";

        } else {

            nomes[i].style.display = "none";
        }
    }
}