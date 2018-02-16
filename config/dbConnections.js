var mysql = require('mysql');

module.exports = function () {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'sa',
        password: 'xablau@123',
        database: 'portal_noticias'
    });
    return connection;
}
