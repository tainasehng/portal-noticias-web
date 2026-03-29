function NoticiasDAO(connection){

    this.getNoticias = function(callback){
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = function(id_noticia, callback){
        connection.query(
            'select * from noticias where id_noticia = ?',
            [id_noticia],
            callback
        );
    }

    this.salvarNoticia = function(noticia, callback){
        connection.query('insert into noticias set ?', noticia, callback);
    }

    this.get5UltimasNoticias = function(callback){
        connection.query(
            'select * from noticias order by data_criacao desc limit 5',
            callback
        );
    }
}

module.exports = NoticiasDAO;
