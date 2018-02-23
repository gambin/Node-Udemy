module.exports.formulario_inclusao_noticia = function (app, req, res) {
    res.render('admin/form_add_noticia', { validacao: {}, noticia: {} });
}

module.exports.salvar_noticias = function (app, req, res) {
    var noticia = req.body;

    // console.log(noticia);
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatória').notEmpty();
    req.assert('noticia', 'Notícia é obrigatória');

    var erros = req.validationErrors();

    if (erros) {
        res.render('admin/form_add_noticia', { validacao: erros, noticia: noticia });
        return;
    }

    var connection = app.config.dbConnections();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
        if (!error) {
            // res.render('noticias/noticias', { noticias: result });
            res.redirect('/noticias');
        } else {
            console.log(error);
        }
    });
}