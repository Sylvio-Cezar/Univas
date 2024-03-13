// 06 - Espalhamento

let pessoa = {
    nome: "Sylvio Cézar",
    nascimento: "24/12/2003",
    cpf: "000.000.000-00"
}

let aluno = {
    ...pessoa,
    matricula: "99999",
    notas: [10, 9.8, 8, 8.5],
    media: function() {
        let media = 0;
        aluno.notas.forEach(element => {
            media += element;
        });
        return media / aluno.notas.length;
    }
}

console.log(aluno);
console.log(`Média: ${aluno.media()}`);
