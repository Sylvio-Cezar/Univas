/* --- Lista de exercícios 02 --- */

// 01
function saudacao(nome) {
    return `Olá, ${nome}! Você aprendeu função.`;
}

const nomeUsuario = "Sylvio Cézar";
console.log(saudacao(nomeUsuario)); 

// 02
function somaQuadrado(num1, num2){
    let soma = num1 + num2;
    let quadrado = soma * soma;
    return `A soma dos números é ${soma} e o quadrado dessa soma é ${quadrado}.`;
}

const num1 = 10;
const num2 = 5;

console.log(somaQuadrado(num1, num2));

// 03
function concatenaPalavras(word1, word2){
    let concat = word1 + word2;
    return `A concatenação das palavras é ${concat}`;
}

const word1 = "Sylvio";
const word2 = "Cézar";
console.log(concatenaPalavras(word1, word2));

// 04
function primeiroUltimoCaractere(word){
    const primeiro = word.charAt(0);
    const ultimo = word.charAt(word.length - 1);
    return `Primeiro caractere da palavra é ${primeiro} e o ultimo caractere da palavra é ${ultimo}`;
}

const word = "Sylvio";
console.log(primeiroUltimoCaractere(word));

// 05
function comparacaoNumeros(num1, num2){
    let comparacao;
    if(num1 > num2){
       comparacao = num1; 
    }else{
        comparacao = num2;
    }
    return `O número maior é ${comparacao}`;
}

const otherNum1 = 15;
const otherNum2 = 5;
console.log(comparacaoNumeros(num1, num2));

// 06
const mensagemEscopoArquivo = "Testando 123";

function escreverMensagemNoTerminal(mensagemEscopoFuncao){
    const mensagemEscopoFuncao = "Testando 456";
    console.log(mensagemEscopoFuncao)
}

escreverMensagemNoTerminal("Mensagem bonita!")
console.log(mensagemEscopoArquivo) 

// 07
function calcularMedia(numeros) {
    const soma = numeros.reduce((total, numero) => total + numero, 0);
    const media = soma / numeros.length;
    return media;
}

const meuArray = [10, 20, 30, 40, 50];
const mediaCalculada = calcularMedia(meuArray);
console.log(`A média dos números é: ${mediaCalculada}`);

// 08
function fatorial(num) {
    if (num < 0) {
        return "Indefinido";
    } else if (num === 0) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 1; i <= num; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

const numero = 2;
console.log(`O fatorial de ${numero} é: ${fatorial(numero)}`);

// 09 
function executaCallback(callback) {

    callback();
}


function minhaFuncao() {
    console.log("Teste");
}

executaCallback(minhaFuncao);

// 10
async function aguardarSegundos(segundos) {
    await new Promise(resolve => setTimeout(resolve, segundos * 1000));
    console.log(`Passaram-se ${segundos} segundos!`);
}


const tempoEspera = 3; 
aguardarSegundos(tempoEspera);

// 11
function ehNumero(valor) {
    return typeof valor === "number" && !isNaN(valor);
}


console.log(ehNumero(42)); // Saída: true
console.log(ehNumero("Olá")); // Saída: false
console.log(ehNumero(3.14)); // Saída: true
console.log(ehNumero("123")); // Saída: false


