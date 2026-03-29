module.exports=function(app){

	app.get('/formulario_inclusao_noticia', function(req, res){
		app.app.controllers.admin.formulario_inclusao_noticia(app, req, res);
	});

	app.post('/noticias/salvar', function(req, res){
		app.app.controllers.admin.noticias_Salvar(app, req, res);
	});

	app.get('/noticias/excluir/:id', function(req, res){
		app.app.controllers.admin.excluir_noticia(app, req, res);
	});

	app.get('/noticias/editar/:id', function(req, res){
		app.app.controllers.admin.formulario_edicao_noticia(app, req, res);
	});

}
