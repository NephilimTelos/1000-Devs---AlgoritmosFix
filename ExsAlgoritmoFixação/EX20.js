/*20. Ler um número inteiro com até quatro dígitos e imprimir a saída da seguinte forma:
MILHARES = x
CENTENA = x
DEZENA = x
UNIDADE = x
*/

const prompt = require('prompt-sync')()

let num = Number(prompt('Insira um número inteiro de 4 dígitos: '))

let milhares = Math.floor(num / 1000);
let centenas = Math.floor((num % 1000) / 100)
let dezenas = Math.floor((num % 100) / 10)
let unidades = num % 10

console.log(`MILHARES = ${milhares}`);
console.log(`CENTENAS = ${centenas}`);
console.log(`DEZENAS = ${dezenas}`);
console.log(`UNIDADES = ${unidades}`);