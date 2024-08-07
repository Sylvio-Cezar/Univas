const fs = require('fs');

const stream = fs.createReadStream('./text.txt', {
    encoding: 'utf8',
    highWaterMark: 4096 
});

var chunkIndex = 0;
stream.on('data', (chunk) => {

    let words = chunk.replaceAll('\r\n', ' ').replaceAll('\n', ' ').replaceAll(/\s+/gm, ' '); // substitui espaços consecutivos por um único espaço

    words = words.split(' ').filter(elem => elem != '');

    console.log(`--------------- Chunk ${chunkIndex.toString().padStart(2, '0')} (${words.length} palavras) ---------------`);
    console.log(chunk);
    console.log("");
    
    chunkIndex++;
})