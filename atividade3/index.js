const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const port = 3000;

app.get('/somar/:a/:b', (req, res) => {
    const {a, b} = req.params;
    const resultado = calculadora.somar(Number(a), Number(b));
    res.send(`Resultado: ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const {a, b} = req.params;
    const resultado = calculadora.subtrair(Number(a), Number(b));
    res.send(`Resultado: ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const {a, b} = req.params;
    const resultado = calculadora.multiplicar(Number(a), Number(b));
    res.send(`Resultado: ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const {a, b} = req.params;
    const resultado = calculadora.dividir(Number(a), Number(b));
    res.send(`Resultado: ${resultado}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em https://localhost:${port}`);
});