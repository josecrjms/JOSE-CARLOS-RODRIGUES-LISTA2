function confirmarPresenca() {

    let alunos = document.getElementsByClassName("aluno");

    let presentes = [];
    let ausentes = [];

    for (let i = 0; i < alunos.length; i++) {

        if (alunos[i].checked) {

            presentes.push(alunos[i].value);

        } else {

            ausentes.push(alunos[i].value);
        }
    }

    document.getElementById("presentes").innerHTML =
        presentes.join(", ");

    document.getElementById("ausentes").innerHTML =
        ausentes.join(", ");
}