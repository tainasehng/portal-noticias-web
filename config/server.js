var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine','ejs');//estamos informando para o express que o ejs é o monitor de tela
app.set('views','./app/views');//como server será importado em app, esse caminhoirá levar para views

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended:true})); //informando o express que está usando o body-parser

app.use(expressValidator()); //colocando em execução o expressValidator

consign()
	.include('app/routes')
	.then('config/dbConnection.js')//incluindo conexão com o banco de dados no consign
	.then('app/models')
	.then('app/controllers')
	.into(app);
//o consign reconhece todos os arquivos da pasta routes (faz um scan)
//módulos e inclui dentro do servidor - app

module.exports = app;//o módulo vai retornar a variavel app
