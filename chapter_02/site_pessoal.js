const http = require('http');
const fs   = require('fs');
const url  = require('url');
const path = require('path');

let router = function(pathname){
    if(pathname && pathname !== '/'){
        let file = path.join(__dirname, `/html/${pathname}.html`);
        console.log(file);
        if(fs.existsSync(file)) return file;
        else return path.join(__dirname, '/html/error.html')
    }
    return path.join(__dirname, '/html/index.html');
}

const server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    let route = router(pathname);

    fs.readFile(route, (err, html) => {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(html);
    });
    
}).listen(3000, () => {
    console.log('Server running...');
});
