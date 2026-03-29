# Portal de Notícias

Aplicação web desenvolvida com Node.js, Express, EJS e MySQL para exibição e gerenciamento de notícias.

---

## Objetivo

Este projeto foi desenvolvido com o objetivo de praticar conceitos de desenvolvimento web back-end, organização em arquitetura MVC, integração com banco de dados e renderização de páginas dinâmicas.

---

## Funcionalidades

- Exibição das notícias na página inicial  
- Visualização de notícia individual  
- Cadastro de novas notícias  
- Edição de notícias  
- Exclusão de notícias  
- Integração com banco de dados MySQL  
- Organização em MVC (Model, View, Controller)

---

## Tecnologias utilizadas

- Node.js  
- Express  
- EJS  
- MySQL  
- HTML  
- CSS  
- JavaScript  

---

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
│   ├── dbConnection.js
│   └── server.js
│
├── app.js
├── database.sql
├── package.json
└── README.md
```

---

## Como executar o projeto

1. Clone o repositório
   
```bash
git clone https://github.com/tainasehng/portal-noticias-web.git
```

2. Acesse a pasta

```bash
cd portal-noticias-web
```

3. Instale as dependências

```bash
npm install
```

4. Configure o banco de dados

- Crie um banco MySQL chamado:

```bash
CREATE DATABASE portal_noticias;
```

- Importe o arquivo database.sql

- Configure o arquivo:

```bash
config/dbConnection.js
```

com seu usuário e senha do MySQL.

5. Execute o projeto

```bash
npm start
```

6. Acesse no navegador
   
http://localhost:3000

---

## Demonstração

### Página Inicial

Exibe as principais notícias cadastradas no sistema, com título, resumo, autor e data. Possui navegação para visualizar todas as notícias e acessar o formulário de cadastro.

<img width="1919" height="1021" alt="image" src="https://github.com/user-attachments/assets/72fb02e7-9d9c-47cd-8255-342ef3f8788f" /> 


### Lista de Notícias

Apresenta todas as notícias cadastradas no banco de dados. Permite visualizar detalhes, editar ou excluir cada notícia.

<img width="1919" height="1020" alt="image" src="https://github.com/user-attachments/assets/0e0601be-36d2-4726-b1bd-46e45f1205c8" />


### Vizualização da Notícia

Exibe o conteúdo completo da notícia selecionada, apresentando título, autor, data, resumo e o texto integral, proporcionando uma visualização detalhada e organizada da informação.

<img width="1919" height="1018" alt="image" src="https://github.com/user-attachments/assets/181ea6b7-6cb9-42ff-94bb-04588feb2ed5" />


### Cadastro de Notícia

Formulário para inserção de novas notícias no sistema, com validação de campos obrigatórios antes do envio.

<img width="1919" height="1022" alt="image" src="https://github.com/user-attachments/assets/b158f2a8-78e0-4b4a-8afd-64ea6e534dc0" />


### Edição de Notícia

Permite editar uma notícia existente, carregando automaticamente os dados previamente cadastrados.

<img width="1917" height="1007" alt="image" src="https://github.com/user-attachments/assets/288b5ef1-ef40-4bf4-be03-c897027aa9f1" />

---

## Aprendizados

Com este projeto, foram praticados:

- Estrutura MVC em aplicações web
- Criação de rotas com Express
- Integração com banco de dados MySQL
- Operações CRUD (Create, Read, Update, Delete)
- Renderização dinâmica com EJS
- Organização de código em Node.js

---

## Melhorias futuras

- Autenticação de usuários
- Paginação de notícias
- Upload de imagens
- Melhorias no layout (UI/UX)
- Validação de formulários mais robusta

---

## Autora

Desenvolvido por Tainá Nascimento Sehn Garcia
Estudante de Engenharia de Computação — UFGD
