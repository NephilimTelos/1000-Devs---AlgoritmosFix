/*Faça um algoritmo que calcule e mostre a tabuada de (+, -, * e /) de um número
digitado pelo usuário.
Resultado esperado:
OBS: Quando se calcula em uma substração um numero menor de um número maior (ex:
3 - 10) o resultado será um número negativo. Pesquise como desprezar o sinal negativo
para sempre termos um número positivo.*/

const prompt = require('prompt-sync')()

let num = Number(prompt('Insira o número desejado: '))

console.group('Tabuada do + e - para o número ',num, ':')
console.log(num, '+ 0 = ', num + 0 ,'\t' ,num, '- 0 = ', Math.abs(num - 0))  
console.log(num, '+ 1 = ', num + 1 ,'\t' ,num, '- 1 = ', Math.abs(num - 1)) 
console.log(num, '+ 2 = ', num + 2 ,'\t' ,num, '- 2 = ', Math.abs(num - 2)) 
console.log(num, '+ 3 = ', num + 3 ,'\t' ,num, '- 3 = ', Math.abs(num - 3))
console.log(num, '+ 4 = ', num + 4 ,'\t' ,num, '- 4 = ', Math.abs(num - 4))
console.log(num, '+ 5 = ', num + 5 ,'\t' ,num, '- 5 = ', Math.abs(num - 5))
console.log(num, '+ 6 = ', num + 6 ,'\t' ,num, '- 6 = ', Math.abs(num - 6))
console.log(num, '+ 7 = ', num + 7 ,'\t' ,num, '- 7 = ', Math.abs(num - 7))
console.log(num, '+ 8 = ', num + 8 ,'\t' ,num, '- 8 = ', Math.abs(num - 8))
console.log(num, '+ 9 = ', num + 9 ,'\t' ,num, '- 9 = ', Math.abs(num - 9))
console.groupEnd()

console.group('Tabuada do * e / para o número ',num, ':')
console.log(num, '* 0 = ', num * 0 ,'\t' ,num, '/ 0 = ', 'Não existe divisão por 0')  
console.log(num, '* 1 = ', num * 1 ,'\t' ,num, '/ 1 = ', Math.abs(num / 1)) 
console.log(num, '* 2 = ', num * 2 ,'\t' ,num, '/ 2 = ', Math.abs(num / 2)) 
console.log(num, '* 3 = ', num * 3 ,'\t' ,num, '/ 3 = ', Math.abs(num / 3))
console.log(num, '* 4 = ', num * 4 ,'\t' ,num, '/ 4 = ', Math.abs(num / 4))
console.log(num, '* 5 = ', num * 5 ,'\t' ,num, '/ 5 = ', Math.abs(num / 5))
console.log(num, '* 6 = ', num * 6 ,'\t' ,num, '/ 6 = ', Math.abs(num / 6))
console.log(num, '* 7 = ', num * 7 ,'\t' ,num, '/ 7 = ', Math.abs(num / 7))
console.log(num, '* 8 = ', num * 8 ,'\t' ,num, '/ 8 = ', Math.abs(num / 8))
console.log(num, '* 9 = ', num * 9 ,'\t' ,num, '/ 9 = ', Math.abs(num / 9))
console.groupEnd()



