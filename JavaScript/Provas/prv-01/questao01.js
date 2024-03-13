// 01 - Callback

function chamaCallback(funcao){
    funcao("callback chamado");
}

chamaCallback(function(mensagem){
    console.log(`Mensagem do callback: ${mensagem}`);
})