const fs = require('fs');

fs.readdir(__dirname, (erro, diretorio) => {
    if(erro) { throw erro; }
    diretorio.forEach(arquivo => {
        let path = './' + arquivo;
        fs.stat(path, (erro, stat) => {
            if(erro) { throw erro; }
            if(stat.isFile()){
                console.log('%s %d bytes', arquivo, stat.size);
            }
        });
    });
});