module.exports = (req, res, next) => {

    if(!req.session.usuario){
        res.redirect('/');
    }
    return next();
};