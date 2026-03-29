var NoticiasDAO = require('../models/NoticiasDAO');

module.exports.formulario_inclusao_noticia = function(app, req, res){
	res.render('admin/form_add_noticia.ejs', { validacao: [], noticia: {} });
};

module.exports.noticias_Salvar = function(app, req, res){

	var noticia = req.body;

	req.assert('titulo', 'Título é obrigatório').notEmpty();
	req.assert('resumo', 'Resumo é obrigatório').notEmpty();
	req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
	req.assert('autor', 'Autor é obrigatório').notEmpty();
	req.assert('data_noticia', 'Data é obrigatória').notEmpty();
	req.assert('noticia', 'Notícia é obrigatória').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render('admin/form_add_noticia.ejs', { validacao: erros, noticia: noticia });
		return;
	}

	var connection = app.config.dbConnection();
	var noticiasModel = new NoticiasDAO(connection);

	noticiasModel.salvarNoticia(noticia, function(error, result){
		if (error){
			console.log(error);
			return res.render('admin/form_add_noticia.ejs', { validacao: [], noticia: noticia });
		}

		res.redirect('/noticias');
	});
}
