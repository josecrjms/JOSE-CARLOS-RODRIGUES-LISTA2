function destacarNome() {

    let nomeDigitado = document.getElementById("nome").value
    let nomes = document.getElementsByTagName("li");

    for (let i = 0; i < nomes.length; i++) {

        if (nomeDigitado === nomes[i].textContent) {

            nomes[i].style.color = "red";

    }
}
}