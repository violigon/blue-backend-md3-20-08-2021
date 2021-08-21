/* const calc = require("./calculadora");
const prompt = require("prompt-sync")();

console.log(`Olá, seja bem vindo a ${calc.nome}`);

const n1 = +prompt('Primeiro número: ');
const n2 = +prompt('Segundo número:');
console.log();

console.log(`
Qual cálculo você gostariua de fazer?
    [1] - soma
    [2] - subtração
    [3] - multiplicação
    [4] - divisão
`);

const opcao = +prompt('Sua escolha: ');

opcao === 1 ? console.log(`${n1} + ${n2} = ${calc.soma(n1,n2)}`): opcao === 2 ? console.log(`${n1} - ${n2} = ${calc.sub(n1,n2)}`): opcao === 3 ? console.log(`${n1} * ${n2} = ${calc.mult(n1,n2)}`) : opcao === 4 ? console.log(`${n1} * ${n2} / ${calc.div(n1,n2)}`): console.log("Opção inválida!"); */

/* const http = require('http');

http.createServer((req, res)=>{
    res.end('Hello world');
}).listen(3000);

console.log('Servidor rodando em http://localhost:3000');

 */

const express = require("express");
const app = express();

app.use(express.json()) //Converter requisição para Javascript Object Notation

const filmes = ["Capitão America", "Capitão Marvel", "Pantera Negra"];

//CRUD = Create[POST] - Read[GET] - Update[PUT] - Delete[DELETE]

//[GET] - Home
app.get("/", (req, res) => {
	res.send("Hello World");
});

//[GET] - Filmes

app.get("/filmes", (req, res) => {
	res.send(filmes);
});

//[GET] - Filmes por id

app.get("/filmes/:id", (req, res) => {
	const id = req.params.id - 1;
	const filme = filmes[id];

	!filme ? res.send("Filme não existe") : res.send(filme);
});

//[POST] - Criar filmes
app.post("/filmes", (req, res) => {
const filme = req.body.filme;
filmes.push(filme);
res.send("Filme inserido com sucesso");
})

//[PUT] - Atualizar Filmes

app.put("/filmes/:id", (req, res)=>{
    const id = req.params.id -1;
    const filme = req.body.filme;
    filmes[id] = filme;
    res.send("Filme alterado com sucesso");

})

//[DELETE] - Deleta Filmes

app.delete("/filmes/:id", (req, res)=>{
    const id = req.params.id -1;
    const filme = req.body.filme;
    filmes[id] = filme;
    res.send("Filme excluido com sucesso");
})

app.listen(3000, ()=>console.log('Servidor rodando em http://localhost:3000'));
