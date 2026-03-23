# Portal de Notícias

Aplicação web desenvolvida com integração entre front-end, back-end e banco de dados, permitindo a exibição e gerenciamento de notícias.

## Funcionalidades

- Exibição de notícias na página inicial  
- Visualização de notícias individuais  
- Cadastro de novas notícias  
- Integração com banco de dados  
- Organização de rotas e controllers  

## Tecnologias

- Node.js  
- Express  
- HTML, CSS e JavaScript  
- EJS (template engine)  
- MySQL  

## Estrutura do projeto

- app/controllers: controle das requisições  
- app/models: acesso aos dados  
- app/routes: definição de rotas  
- app/views: páginas (EJS)  
- app/public: arquivos estáticos (CSS, imagens, JS)  
- config: configuração do servidor e banco  

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Configure o banco de dados utilizando o arquivo database.sql

3. Execute o projeto:

```bash
node app.js
```

4. Acesse no navegador:

http://localhost:3000

