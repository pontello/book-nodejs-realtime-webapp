module.exports = (app) => {
    
    const autenticar = require('./../middleware/autenticar');
    
    const contatos = app.controllers.contatos;
    app.get('/contatos', autenticar, contatos.index);
    app.get('/contato/:id', autenticar, contatos.show);
    app.get('/contato/:id/editar', autenticar, contatos.edit);
    app.post('/contato', autenticar, contatos.create);
    app.put('/contato/:id', autenticar, contatos.update);
    app.delete('/contato/:id', autenticar, contatos.destroy);
};