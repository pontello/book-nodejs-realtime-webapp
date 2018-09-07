const fs = require('fs');

let leituraAsync = (arquivo) => {
    console.log('Fazendo leitura assíncrona');
    let inicio = new Date().getTime();
    fs.readFile(arquivo);
    let fim = new Date().getTime();
    console.log('Bloqueio assícrono: ' + (fim - inicio) + 'ms');
};

module.exports = leituraAsync;