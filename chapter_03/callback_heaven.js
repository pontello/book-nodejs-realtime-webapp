const fs = require('fs');

let lerDiretorio = () =>{
    fs.readdir(__dirname, (erro, diretorio) => {
        if(erro) { throw erro; }
        diretorio.forEach(arquivo => {
            ler(arquivo);
        });
    });
};

let ler = (arquivo) => {
    let path = './' + arquivo;
    fs.stat(path, (erro, stat) => {
        if(erro) return erro;
        if(stat.isFile()){
            console.log('%s %d bytes', arquivo, stat.size);
        }
    });
};

lerDiretorio();