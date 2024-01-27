/*10. Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre. 
a) a idade dessa pessoa em anos;
b) a idade dessa pessoa em meses;
c) a idade dessa pessoa em dias; considere todos os meses com 30 dias
d) a idade dessa pessoa em semanas, considere que todos os messes possuem 4
semanas;*/

const prompt = require('prompt-sync')()


let ano_nascimento = Number(prompt('Insira seu ano de nascimento: ', '\n'))
let ano_atual = Number(prompt('Insira o ano atual: ', '\n'))

let ano = ano_atual - ano_nascimento
let meses = ano * 12
let dias = ano * ((30 * 4) + (31 * 7) + 28)

console.log('Sua idade atualmente é: ')
console.log(`${ano} anos`)
console.log(`${meses} meses`)
console.log(`${dias} dias`)