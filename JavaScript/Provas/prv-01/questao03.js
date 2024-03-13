// 03 - N parâmetros

function imprimirIndefinidos(...parametros) {
    parametros.forEach(element => {
        console.log(element);
    });
}

imprimirIndefinidos("Sport", "Club", "Corinthians", "Paulista", 1910);