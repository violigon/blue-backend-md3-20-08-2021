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

const http = require('http');

http.createServer((req, res)=>{
    res.end('Hello world');
}).listen(3000);

console.log('Servidor rodando em http://localhost:3000');

