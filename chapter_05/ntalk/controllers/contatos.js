module.exports = (app) => {

    const ContatoController = {
        index: (req, res) => {
            let usuario = req.session.usuario;
            let params = { usuario: usuario, contatos: usuario.contatos };
            res.render('contatos/index', params);
        },
        show: (req, res) => {
            let id = req.params.id;
            let usuario = req.session.usuario;
            let contato = usuario.contatos[id];
            res.render('contatos/show', { contato: contato, id: id });
        },
        edit: (req, res) => {
            let id = req.params.id;
            let usuario = req.session.usuario;
            let contato = usuario.contatos[id];
            let params = { contato: contato, id: id}
            res.render('contatos/edit', params);
        },
        create: (req, res) => {
            let usuario = req.session.usuario;
            let contato = req.body.contato;
            usuario.contatos.push(contato);
            res.redirect('/contatos');
        },
        update: (req, res) => {
            let id = req.params.id;
            let usuario = req.session.usuario;
            let contato = req.body.contato;
            usuario.contatos[id] = contato;
            res.redirect('/contatos');
        },
        destroy: (req, res) => {
            let id = req.params.id;
            let usuario = req.session.usuario;
            usuario.contatos.splice(id, 1);
            res.redirect('/contatos');
        }
    };
    return ContatoController;
};
