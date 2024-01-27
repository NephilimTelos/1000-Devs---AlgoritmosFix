/*3. Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua
média ponderada (as notas tem pesos respectivos de 1, 2 e 3)*/

const prompt = require('prompt-sync')()

let nota1 = Number(prompt('Insira o valor da primeira nota: '))
let nota2 = Number(prompt('Insira o valor da segunda nota: '))
let nota3 = Number(prompt('Insira o valor da terceira nota: '))

media_final = (nota1 + (nota2 * 2) + (nota3 * 3)) / 6
let status

if(media_final < 6)
status = ('\u001b[31mREPROVADO\u001b[37m')

if(media_final >= 6)
status = ('\u001b[32mAPROVADO\u001b[37m')

console.log('A média final deste aluno é:', media_final)
console.log('Situação do aluno: ',status)