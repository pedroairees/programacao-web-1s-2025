const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let estoque = [];

// Rota para adicionar um novo produto
app.post('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    
    // Garantir que a quantidade seja um número válido
    const quantidade = parseInt(qtd, 10);
    if (isNaN(quantidade)) {
        return res.status(400).json({ error: 'Quantidade inválida.' });
    }

    // Verificar se o produto já existe no estoque
    const produtoExistente = estoque.find(produto => produto.id === id);
    if (produtoExistente) {
        return res.status(400).json({ error: 'Produto já existe no estoque' });
    }

    // Adicionar o novo produto ao estoque
    estoque.push({
        id,
        nome,
        quantidade
    });

    res.status(201).json({ message: 'Produto adicionado com sucesso!', produto: { id, nome, quantidade } });
});

// Rota para listar todos os produtos do estoque
app.get('/listar', (req, res) => {
    if (estoque.length === 0) {
        return res.status(404).json({ message: 'Nenhum produto no estoque.' });
    }

    res.json(estoque);
});

// Rota para remover um produto do estoque
app.delete('/remover/:id', (req, res) => {
    const { id } = req.params;

    const index = estoque.findIndex(produto => produto.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    // Remover o produto do estoque
    estoque.splice(index, 1);
    res.json({ message: 'Produto removido com sucesso.' });
});

// Rota para editar a quantidade de um produto
app.put('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;

    // Garantir que a quantidade seja um número válido
    const quantidade = parseInt(qtd, 10);
    if (isNaN(quantidade)) {
        return res.status(400).json({ error: 'Quantidade inválida.' });
    }

    const produto = estoque.find(produto => produto.id === id);
    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    // Atualizar a quantidade do produto
    produto.quantidade = quantidade;
    res.json({ message: 'Quantidade atualizada com sucesso!', produto });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});