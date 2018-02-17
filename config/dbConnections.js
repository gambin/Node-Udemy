var mysql = require('mysql');

var connMySQL = function () {
    console.log('conexao com bd iniciada');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'sa',
        password: 'xablau@123',
        database: 'portal_noticias'
    });
    console.log('conexao com bd disponibilizada');
    return connection;
}

module.exports = function () {
    return connMySQL;
}
