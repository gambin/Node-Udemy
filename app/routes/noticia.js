
module.exports = function (app) {
    app.get('/noticia', function (req, res) {

        var connection = app.config.dbConnections();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, function (error, result) {
            if (!error) {
                res.render('noticias/noticia', { noticia: result });
            } else {
                console.log(error);
            }
        });
    });
};