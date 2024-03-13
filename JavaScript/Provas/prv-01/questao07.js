// 07 - Médias

let pessoa1 = {
    nome: "Sylvio Cézar",
    nascimento: "24/12/2003",
    cpf: "000.000.000-00"
}

let pessoa2 = {
    nome: "P2",
    nascimento: "25/12/2003",
    cpf: "100.000.000-00"
}

let pessoa3 = {
    nome: "P3",
    nascimento: "26/12/2003",
    cpf: "200.000.000-00"
}

let pessoa4 = {
    nome: "P4",
    nascimento: "27/12/2003",
    cpf: "300.000.000-00"
}

let pessoa5 = {
    nome: "P5",
    nascimento: "28/12/2003",
    cpf: "400.000.000-00"
}

let aluno1 = {
    ...pessoa1,
    matricula: "99999",
    notas: [10, 9, 8, 9],
    media: function() {
        let media = 0;
        aluno1.notas.forEach(element => {
            media += element;
        });
        return media / aluno1.notas.length;
    }
}

let aluno2 = {
    ...pessoa2,
    matricula: "99998",
    notas: [8, 9, 8, 7],
    media: function() {
        let media = 0;
        aluno2.notas.forEach(element => {
            media += element;
        });
        return media / aluno2.notas.length;
    }
}

let aluno3 = {
    ...pessoa3,
    matricula: "99997",
    notas: [7, 8, 9, 6],
    media: function() {
        let media = 0;
        aluno3.notas.forEach(element => {
            media += element;
        });
        return media / aluno3.notas.length;
    }
}

let aluno4 = {
    ...pessoa4,
    matricula: "99996",
    notas: [8, 7, 6, 7],
    media: function() {
        let media = 0;
        aluno4.notas.forEach(element => {
            media += element;
        });
        return media / aluno4.notas.length;
    }
}

let aluno5 = {
    ...pessoa5,
    matricula: "99995",
    notas: [9, 8, 8, 10],
    media: function() {
        let media = 0;
        aluno5.notas.forEach(element => {
            media += element;
        });
        return media / aluno5.notas.length;
    }
}

let alunosTotais = [];
alunosTotais.push(aluno1);
alunosTotais.push(aluno2);
alunosTotais.push(aluno3);
alunosTotais.push(aluno4);
alunosTotais.push(aluno5);

function calcularMedias(alunos){
    let mediaGeral = 0;
    let maiorMedia = null;
    let menorMedia = null;
    alunos.forEach(element => {
        mediaGeral += element.media();

        if (menorMedia == null) {
            menorMedia = element.media();
        } else {
            if (element.media() < menorMedia) {
                menorMedia = element.media();
            }
        }

        if (maiorMedia == null) {
            maiorMedia = element.media();
        } else {
            if (element.media() > maiorMedia) {
                maiorMedia = element.media();
            }
        }
    })
    mediaGeral /= alunos.length;

    return {
        "Média geral" : mediaGeral, 
        "Menor média" : menorMedia, 
        "Maior média" : maiorMedia
    }
}

console.log(calcularMedias(alunosTotais));


