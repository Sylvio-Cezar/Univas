// 04 - Arrow

let pessoa = {
    nome: "Sylvio Cézar",
    sobrenome: "Rezende Pereira",
    nomeCompletoCorreto: function(){
        return this.nome + " " + this.sobrenome;
    },
    nomeCompletoErrado: () => {
        return this.nome + " " + this.sobrenome;
    }
}

console.log(pessoa.nomeCompletoCorreto()); // Correto pois compreende o contexto e entende o this
console.log(pessoa.nomeCompletoErrado()); // Errado pois não compreende o contexto e não entende o this