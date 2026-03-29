# Portal de Notícias

Aplicação web desenvolvida com Node.js, Express, EJS e MySQL para exibição e gerenciamento de notícias.

## Objetivo

O projeto foi desenvolvido com o objetivo de praticar conceitos de desenvolvimento web back-end, organização em MVC, integração com banco de dados e renderização de páginas dinâmicas.

## Funcionalidades

- Exibição das notícias na página inicial
- Visualização de notícia individual
- Cadastro de novas notícias
- Integração com banco de dados MySQL
- Organização do sistema em rotas, controllers e models

## Tecnologias utilizadas

- Node.js
- Express
- EJS
- MySQL
- HTML
- CSS
- JavaScript

## Estrutura do projeto

```bash
portal-noticias-web/
│
├── app/
│   ├── controllers/
│   ├── models/
│   ├── public/
│   ├── routes/
│   └── views/
│
├── config/
├── app.js
├── package.json
└── README.md
```

## Como executar

1. Clone o repositório

```bash
git clone https://github.com/tainasehng/portal-noticias-web.git
```

2. Acesse a pasta do projeto

```bash
cd portal-noticias-web
```

3. Instale as dependências

```bash
npm install
```

4. Configure o banco de dados

Crie o banco MySQL e importe o arquivo database.sql do projeto.

Depois, configure a conexão com o banco no arquivo correspondente da pasta config.

5. Execute o projeto

```bash
npm start
```
   
6. Acesse no navegador

http://localhost:3000

## Aprendizados

Com este projeto, pratiquei:

- estrutura MVC
- criação de rotas
- controllers e models
- integração com banco de dados MySQL
- renderização dinâmica com EJS
- organização de aplicação web em Node.js

## Melhorias futuras

- editar e excluir notícias
- validação de formulário mais completa
- melhoria no layout
- autenticação de usuários
- paginação de notícias

