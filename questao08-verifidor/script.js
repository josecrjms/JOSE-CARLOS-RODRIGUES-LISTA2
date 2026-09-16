function verificarIdade() {

    let anoAtual = new Date().getFullYear();

    let anoNascimento =
        Number(document.getElementById("ano").value);


    let sexoSelecionado =
        document.querySelector('input[name="sexo"]:checked');


    let mensagem =
        document.getElementById("mensagem");

    let foto =
        document.getElementById("foto");


    if (anoNascimento === 0 || anoNascimento > anoAtual) {

        mensagem.innerHTML =
            "Digite um ano de nascimento válido.";

        foto.style.display = "none";

        return;
    }


    if (sexoSelecionado === null) {

        mensagem.innerHTML =
            "Selecione o sexo.";

        foto.style.display = "none";

        return;
    }


    let idade = anoAtual - anoNascimento;

    let sexo = sexoSelecionado.value;

    let imagem = "";

    let pessoa = "";


    if (idade <= 2) {

        pessoa = "bebê";

        if (sexo === "masculino") {

            imagem = "bbm.png.png";

        } else {

            imagem = "bbf.png.png";
        }


    } else if (idade <= 12) {

        pessoa = "criança";

        if (sexo === "masculino") {

            imagem = "criancaMenino.png.png";

        } else {

            imagem = "criancaMenina.png.png";
        }


    } else if (idade <= 17) {

        pessoa = "adolescente";

        if (sexo === "masculino") {

            imagem = "JovemMenino.png.png";

        } else {

            imagem = "JovemMenina.png.png";
        }


    } else if (idade <= 59) {

        if (sexo === "masculino") {

            pessoa = "homem";
            imagem = "homem.png.png";

        } else {

            pessoa = "mulher";
            imagem = "mulher.png.png";
        }


    } else {

        if (sexo === "masculino") {

            pessoa = "senhor";
            imagem = "senhor.png.png";

        } else {

            pessoa = "senhora";
            imagem = "senhora.png.png";
        }
    }


    mensagem.innerHTML =
        `Detectamos ${pessoa} com ${idade} anos.`;


    foto.src = imagem;

    foto.style.display = "block";
}