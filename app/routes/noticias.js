var dbConnection = require('../../config/dbConnections');

module.exports = function (app) {
    app.get('/noticias', function (req, res) {

        var connection = dbConnection();
        connection.query('select * from noticias', function (error, result) {
            if(!error){
                res.render('noticias/noticias', {noticias : result});
            } else {
                console.log(error);
            }        
        });
    });
};