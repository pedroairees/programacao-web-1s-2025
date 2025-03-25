# Calculadora Web

Este projeto é uma aplicação web simples utilizando Node.js e Express para realizar operações matemáticas básicas (soma, subtração, multiplicação e divisão) através de rotas HTTP.

## 📌 Requisitos
- Node.js instalado ([Download Node.js](https://nodejs.org))

## 🚀 Como executar

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/calculadora-web.git
   cd calculadora-web
   
2. Instale as dependências:
   ```sh
   npm install

3. Inicie o servidor:
   ```sh
   node index.js

### Acesse no navegador ou via Postman as seguintes rotas:

- **Soma:** [`http://localhost:3000/somar/10/5`](http://localhost:3000/somar/10/5)  
- **Subtração:** [`http://localhost:3000/subtrair/10/5`](http://localhost:3000/subtrair/10/5)  
- **Multiplicação:** [`http://localhost:3000/multiplicar/10/5`](http://localhost:3000/multiplicar/10/5)  
- **Divisão:** [`http://localhost:3000/dividir/10/5`](http://localhost:3000/dividir/10/5)

## 📜 Estrutura do projeto
```bash
calculadora-web/
├── util/
│   ├── calculadora.js   # Módulo com funções matemáticas
├── index.js             # Servidor Express
├── package.json         # Gerenciador de dependências
