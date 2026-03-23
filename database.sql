-- Criação do banco de dados
CREATE DATABASE portal_noticias;
USE portal_noticias;

-- Criação da tabela
CREATE TABLE noticias (
    id_noticia INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    noticia TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Alterações na tabela
ALTER TABLE noticias ADD COLUMN resumo VARCHAR(100);
ALTER TABLE noticias ADD COLUMN autor VARCHAR(30);
ALTER TABLE noticias ADD COLUMN data_noticia DATE;

-- Inserção de dados iniciais
INSERT INTO noticias (titulo, noticia)
VALUES ("Primeira notícia", "O portal foi lançado");

INSERT INTO noticias (titulo, noticia)
VALUES ("Segunda notícia", "O portal está a todo vapor");

-- Consulta de teste
SELECT * FROM noticias;