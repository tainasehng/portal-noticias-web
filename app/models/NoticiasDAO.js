function NoticiasDAO(connection){
	this.getNoticias=function(connection,callback){
		connection.query('select * from noticias', callback);
	}

	this.getNoticia=function(connection, callback){
		connection.query('select * from noticias where id_noticia=2', callback);
	}

	this.salvarNoticia=function(noticia, connection, callback){
		connection.query('insert into noticias set ?', noticia, callback);
	}

	this.get5UltimasNoticias=function(connection, callback){
		connection.query('select * from noticias order by data_criacao desc limit 5', callback);
	}
}

module.exports=NoticiasDAO;

//Agora que transformamos o NoticiasModel em uma classe (NoticiasDAO), o módulo consign não consegue
//carregar automaticamente o módulo (NoticiasDAO). Qual a soloção? 
//Usar require para efetuar a importação do NoticiasDAO.