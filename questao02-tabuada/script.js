function gerarTabuada() {
    let numeroInput = Number(document.getElementById("numero").value);

     document.getElementById("tabuada").innerHTML = "";

    if(numeroInput >= 1 && numeroInput <= 10) {

       document.getElementById("numero-exibido").innerText = ` ${numeroInput}`;
        for(let i = 1; i <= 10; i++) {
            let resultado = numeroInput * i;
            document.getElementById("tabuada").innerHTML += `${numeroInput} x ${i} = ${resultado}<br>`;
        }
    }
}
