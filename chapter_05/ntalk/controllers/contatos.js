module.exports = (app) => {
    
    const ContatoController = {
        index: (req, res) => {
            let usuario = req.session.usuario;
            let params = {usuario, usuario}
            res.render('contatos/index', params);
        }
    };
    return ContatoController;
};
