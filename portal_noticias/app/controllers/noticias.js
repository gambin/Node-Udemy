module.exports.noticias = function (app, req, res) {
    var connection = app.config.dbConnections();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function (error, result) {
        if (!error) {
            res.render('noticias/noticias', { noticias: result });
            //console.log(result);    
        } else {
            console.log(error);
        }
    });
}

module.exports.noticia = function (app, req, res) {
    var connection = app.config.dbConnections();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);
    var id_noticia = req.query.id_noticia;

    try {
        noticiasModel.getNoticia(id_noticia, function (error, result) {
            if (!error) {
                res.render('noticias/noticia', { noticia: result });
            } else {
                console.log(error);
            }
        });
    } catch (e) {
        console.log(e);
        res.render('/');
    }

}