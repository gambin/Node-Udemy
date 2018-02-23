module.exports.index = function(app, req, res){
    var connection = app.config.dbConnections();
    var noticias = new app.app.models.NoticiasDAO(connection);

    noticias.get5UltimasNoticias(function(error, result){
        res.render('home/index', {noticias : result});
        // console.log(result);
    });
}