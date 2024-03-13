// 05 - Variáveis

let localMutavel = 'let';
localMutavel = 8;
// let é uma variável local e que pode ser alterada durante a execução

const localImutavel = 'const';
// localImutavel = 8; --> Não pode (gera erro)
// const é uma variável local e que não pode ser alterada durante a execução

var globalMutavel = 'var';
globalMutavel = true;
// var é uma variável global e que pode ser alterada durante a execução

console.log("let: " + localMutavel);
console.log("const: " + localImutavel);
console.log("var: " + globalMutavel);