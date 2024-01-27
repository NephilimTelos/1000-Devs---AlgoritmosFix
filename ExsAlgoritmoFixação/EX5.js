/*5. Faça um algoritmo que receba dois números inteiros, calcule e mostre a divisão do
primeiro número pelo segundo. Sabe-se que o segundo número não pode ser zero, portanto não é necessário se preocupar com validações.
OBS: Para forçar uma divisão de dois números inteiro produzir um resultado fracionário, utilizamos a palavra float entre parênteses. Exemplo: (a/(float)b). Neste caso, forçamos o
compilador entender que a variavel b apesar de ser inteira deve ser convertida para float*/

const prompt = require('prompt-sync')()

let num1, num2
let conta

num1 = Number(prompt('Insira o primeiro número '))
num2 = Number(prompt('Insira o segundo número '))

conta = parseFloat(num1 / num2)

console.log(conta)