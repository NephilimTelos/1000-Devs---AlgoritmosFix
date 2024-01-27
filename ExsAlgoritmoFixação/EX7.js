/*7. Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre:
a) o novo peso se a pessoa engordar 15% sobre o peso digitado;
b) o novo peso se a pessoa engordar 20% sobre o peso digitado.*/

const prompt = require('prompt-sync')()

let peso_atual
let peso_15
let peso_20

peso_atual = Number(prompt('Insira seu peso atual: '))
peso_15 = peso_atual * 1.15
peso_20 = peso_atual * 1.20

console.log(`Se você engordar mais 15% do seu peso atual, seu peso será de ${peso_15} Kgs`,'\n',
`Se você engordar mais 30% do seu peso atual, seu peso será de ${peso_20} Kgs`)