var NoticiasDAO = require('../models/NoticiasDAO');

module.exports.index = function(app, req, res){

	var connection = app.config.dbConnection();

	var noticiasModel = new NoticiasDAO(connection);

	noticiasModel.get5UltimasNoticias(function(error, result){

		if (error) {
			console.log('ERRO NA HOME:', error);
			return res.render('home/home.ejs', { noticias: [] });
		}

		console.log('RESULTADO HOME:', result);

		res.render('home/home.ejs', { noticias: result });

	});

}
