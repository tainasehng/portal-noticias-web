var NoticiasDAO=require('../models/NoticiasDAO');

module.exports.noticias=function(app, req,res){

	var connection = app.config.dbConection();
	//agora recebemos o app por parâmetro

	var noticiasModel= new NoticiasDAO(connection);

	noticiasModel.getNoticias(connection,function(error,result){

		if(error){
			console.log(error);
		}

		res.render('noticias/noticias.ejs',{noticias:result});
	});
}

module.exports.noticia = function(app, req, res){

    var connection = app.config.dbConection();

    var noticiasModel = new NoticiasDAO(connection);

    var id_noticia = req.params.id;

    noticiasModel.getNoticia(id_noticia, function(error, result){

        if(error){
            console.log(error);
        }

        res.render('noticias/noticia.ejs', {noticia: result});

    });

}
