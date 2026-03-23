var mysql = require('mysql');


var connMysql = function(){
	console.log('Conexão com db foi estabelecida');
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'ifms',
		database: 'portal_noticias'
	});

}

module.exports = function(){
	console.log('O consign carregou o módulo de conexão com bd')
	return connMysql;
}