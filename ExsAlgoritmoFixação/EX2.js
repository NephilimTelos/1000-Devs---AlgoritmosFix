/*2. Faça um algoritmo que receba o valor do salário mínimo e o valor do salário de um
funcionário, calcule e mostre a quantidade de salários mínimos que ganha esse
funcionário.*/

const prompt = require('prompt-sync')()

var salario_minimo
var valor_salario
var num_salarios_minimos

salario_minimo = parseInt(1320) 
valor_salario = prompt("Informe o valor do seu salário: ")
num_salarios_minimos = valor_salario / salario_minimo

console.log("Você recebe o equivalente a", num_salarios_minimos.toFixed(2), "salários mínimos")
