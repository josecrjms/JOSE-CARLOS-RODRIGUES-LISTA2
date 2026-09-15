function verificarMulta() {

    let velocidadeInput = Number(document.getElementById("velocidade").value);
    if(velocidadeInput <=100 && velocidadeInput > 0) {

        document.getElementById("resultado").innerText = `Sua velocidade atual é de ${velocidadeInput} km/h, você está dentro do limite de velocidade permitido. Não há multa.`;

    } else {
        document.getElementById("comp").innerText = `Sua velocidade atual é de ${velocidadeInput} km/h.`;
        document.getElementById("resultado").innerText = `Velocidade acima do permitido! MULTADO.`;
    }
}
