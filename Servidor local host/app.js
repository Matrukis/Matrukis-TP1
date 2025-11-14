const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Servir arquivos estáticos em /public
app.use(express.static(path.join(__dirname, 'public')));


// Rotas GET que renderizam as páginas EJS
app.get('/', (req, res) => {
res.render('index', { title: 'Home' });
});


app.get('/about', (req, res) => {
res.render('about', { title: 'Sobre' });
});


app.get('/contact', (req, res) => {
res.render('contact', { title: 'Contato' });
});


app.get('/products', (req, res) => {
// Exemplo: passar uma lista simples para a view
const produtos = [
{ id: 1, nome: 'Produto A', preco: 'R$ 10,00' },
{ id: 2, nome: 'Produto B', preco: 'R$ 25,00' },
{ id: 3, nome: 'Produto C', preco: 'R$ 43,00' }
];
res.render('products', { title: 'Produtos', produtos });
});


// 404 simples
app.use((req, res) => {
res.status(404).send('Página não encontrada');
});


app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));