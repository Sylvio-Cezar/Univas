// 02 - Timeout

function mensagemComAtraso(mensagem){
    setTimeout(() => {
        console.log(mensagem);
    }, 3000);
}

mensagemComAtraso("Mensagem com 3 segundos de atraso");