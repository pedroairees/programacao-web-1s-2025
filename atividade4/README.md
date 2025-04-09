# API de Estoque

Esta API permite gerenciar um estoque de produtos, com funcionalidades para adicionar, listar, remover e editar a quantidade de produtos.

## Tecnologias Utilizadas

- Node.js: Ambiente de execução JavaScript.
- Express.js: Framework para construção da API.

## Endpoints

A API possui 4 endpoints principais:

### 1. Adicionar Produto ao Estoque

URL: /adicionar/:id/:nome/:qtd
Método: POST

#### Parâmetros:

- id (string): O identificador único do produto.
- nome (string): O nome do produto.
- qtd (número): A quantidade do produto a ser adicionada ao estoque.

#### Exemplo de uso:

URL: http://localhost:3000/adicionar/1/Produto1/10
Descrição: Adiciona o produto "Produto1" com a quantidade 10 ao estoque.

Resposta esperada:

{
  "message": "Produto adicionado com sucesso!",
  "produto": {
    "id": "1",
    "nome": "Produto1",
    "quantidade": 10
  }
}

### 2. Listar Todos os Produtos no Estoque

URL: /listar
Método: GET

#### Exemplo de uso:

Abra no navegador:
URL: http://localhost:3000/listar

Resposta esperada (se houver produtos no estoque):

[
  {
    "id": "1",
    "nome": "Produto1",
    "quantidade": 10
  },
  {
    "id": "2",
    "nome": "Produto2",
    "quantidade": 5
  }
]

Resposta esperada (se o estoque estiver vazio):

{
  "message": "Nenhum produto no estoque."
}

### 3. Remover Produto do Estoque

URL: /remover/:id
Método: DELETE

#### Parâmetro:

- id (string): O identificador único do produto a ser removido.

#### Exemplo de uso:

URL: http://localhost:3000/remover/1
Descrição: Remove o produto com id=1 do estoque.

Resposta esperada:

{
  "message": "Produto removido com sucesso."
}

### 4. Editar Quantidade de um Produto no Estoque

URL: /editar/:id/:qtd
Método: PUT

#### Parâmetros:

- id (string): O identificador único do produto.
- qtd (número): A nova quantidade do produto.

#### Exemplo de uso:

URL: http://localhost:3000/editar/1/20
Descrição: Atualiza a quantidade do produto com id=1 para 20.

Resposta esperada:

{
  "message": "Quantidade atualizada com sucesso!",
  "produto": {
    "id": "1",
    "nome": "Produto1",
    "quantidade": 20
  }
}

## Como Rodar a API Localmente

### Passo 1: Clonar o repositório

Clone o repositório para sua máquina local:

git clone [https://github.com/SEU-USUARIO/estoque-api.git](https://github.com/SEU-USUARIO/estoque-api.git)

### Passo 2: Instalar Dependências

Entre na pasta do projeto e instale as dependências:

cd estoque-api
npm install

### Passo 3: Rodar a API

Inicie o servidor com o comando:

npm start

Ou diretamente com Node.js:

node index.js

### Passo 4: Testar a API

Agora, você pode testar os endpoints usando ferramentas como Postman, Insomnia, ou curl no terminal.

#### Testar com curl:

Adicionar produto:

curl -X POST "http://localhost:3000/adicionar/1/Produto1/10"

Listar produtos: Abra o navegador ou use o curl para fazer uma requisição GET:

curl -X GET "http://localhost:3000/listar"

Remover produto:

curl -X DELETE "http://localhost:3000/remover/1"

Editar quantidade de produto:

curl -X PUT "http://localhost:3000/editar/1/20"
