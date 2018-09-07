const fs = require('fs');

let leituraSync = (arquivo) => {
    console.log('Fazendo leitura síncrona');
    let inicio = new Date().getTime();
    fs.readFileSync(arquivo);
    let fim = new Date().getTime();
    console.log('Bloqueio síncrono: ' + (fim - inicio) + 'ms');
};

module.exports = leituraSync;
