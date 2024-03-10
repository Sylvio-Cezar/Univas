/* --- Lista de exercícios 03 --- */ 

// 01
function printCresc(...elements) {
  return elements.sort((a, b) => a - b);
}

console.log(printCresc(5, 2, 8, 5, 7, 1, 3)); // [1, 2, 3, 5, 5, 7, 8]

// 02
function occurPos(selected, ...elements) {
  return elements.indexOf(selected);
}

console.log(occurPos(5, 5, 2, 8, 5, 7, 1, 3)); // 0

// 03 
function concatArray(array1, array2) {
  return array1.concat(array2);
}

console.log(concatArray(["a", "b", "c"], [4, "a", 56456634354345345344452.7])); // ["a", "b", "c", 4, "a", 56456634354345345344452.7]

// 04
function revertArray(array) {
  let reverseArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
      reverseArray.push(array[i]);
  }

  return reverseArray;
}

function reverse(elementos) {
  return elementos.reverse();
}

console.log(reverse(["a", "b", "c"])); // ["c", "b", "a"]
console.log(revertArray(["a", "b", "c"])); // ["c", "b", "a"]

// 05
function keys(objeto) {
  return Object.keys(objeto);
}

console.log(keys({ a: 1, b: 2, c: 3 })); // ["a", "b", "c"]

// 06 
function numerosPares(elementos) {
  return elementos.filter((elemento) => Number.isInteger(elemento) && elemento % 2 === 0);
}

console.log(numerosPares([1, 2, 3, 4, 5])); // [2, 4]

// 07 
function juntarElementos(elementos, delimitador) {
  return elementos.join(delimitador);
}

console.log(juntarElementos(["a", "b", "c"], ", ")); // "a, b, c"

// 08 
function calcularMediaNotas(objetos) {
  let somaNotas = 0;
  let maiorMedia = 0;
  let menorMedia = Infinity;
  let quantidadeObjetos = 0;

  for (const objeto of objetos) {
    const media = objeto.notas.reduce((a, b) => a + b, 0) / objeto.notas.length;
    somaNotas += media;
    maiorMedia = Math.max(maiorMedia, media);
    menorMedia = Math.min(menorMedia, media);
    quantidadeObjetos++;
  }

  const mediaGeral = somaNotas / quantidadeObjetos;
  return { mediaGeral, maiorMedia, menorMedia };
}

console.log(
  calcularMediaNotas([
    { nome: "fulano", notas: [4, 5, 2, 8] },
    { nome: "sicrano", notas: [5, 6, 7, 8] },
    { nome: "beltrano", notas: [3, 2, 1, 0] },
  ])
);
// { mediaGeral: 4.666666666666667, maiorMedia: 6.5, menorMedia: 1.25 }

// 09 
function calcular(elementos, quantidade) {
  const conjuntos = [];
  for (let i = 0; i < elementos.length; i += quantidade) {
    conjuntos.push(elementos.slice(i, i + quantidade));
  }
  return conjuntos;
}

console.log(calcular([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]

// 10 
function filtrarPorPropriedade(objetos, propriedade) {
  return objetos.filter((objeto) => objeto.hasOwnProperty(propriedade));
}

console.log(
  filtrarPorPropriedade(
    [
      { a: 1, b: 2 },
      { a: 3, b: 4 },
      { c: 5, d: 6 },
    ],
    "a"
  )
); // [{ a: 1, b: 2 }, { a: 3, b: 4 }]
