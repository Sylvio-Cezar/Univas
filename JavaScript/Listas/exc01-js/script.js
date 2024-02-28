/* --- Lista de exercícios 01 --- */

// 01
let nome = "Sylvio";
let idade = 20;

console.log("Meu nome é " + nome + " e eu tenho " + idade + " anos.");

// 02
let num1 = 10;
let num2 = 5;

console.log("Soma: " + (num1 + num2));
console.log("Subtração: " + (num1 - num2));
console.log("Multiplicação: " + (num1 * num2));
console.log("Divisão: " + (num1 / num2));

// 03
let palavra1 = "Hello,";
let palavra2 = "world!";

console.log(palavra1 + " " + palavra2);

// 04
let str = "Corinthians";
console.log("Primeira: " + str[0]); 
console.log("Última: " + str[str.length - 1]);

// 05
let valor1 = 10;
let valor2 = 20;

console.log(">: " + (valor1 > valor2)); 
console.log("<: " + (valor1 < valor2));
console.log(">=: " + (valor1 >= valor2)); 
console.log("<=: " + (valor1 <= valor2)); 
console.log("==: " + (valor1 == valor2));
console.log("===: " + (valor1 === valor2));
console.log("!=: " + (valor1 != valor2));

// 06
let variavelFora = "fora";

function testarEscopo() {
  let variavelDentro = "dentro";
  console.log("Dentro: " + variavelDentro);
  console.log("Dentro: " + variavelFora); 
}

testarEscopo();
console.log("Fora: " + variavelFora);
// console.log("Fora: " + variavelDentro); // gera erro

// 07
console.log("Mensagem de log");
console.warn("Mensagem de aviso");
console.error("Mensagem de erro");
console.info("Mensagem de informação");

// 08
let numString = "8";

let numInt = parseInt(numString);
console.log(numInt);

// 09
console.log("O script pode ser executado tanto no navegador quanto no Node");

// 10
function somar(a, b) {
  return a + b;
}

console.log(somar(3, 5));
