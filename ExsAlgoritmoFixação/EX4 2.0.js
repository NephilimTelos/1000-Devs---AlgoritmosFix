/*Faça um algoritmo que calcule e mostre a tabuada de (+, -, * e /) de um número
digitado pelo usuário.
Resultado esperado:
OBS: Quando se calcula em uma substração um numero menor de um número maior (ex:
3 - 10) o resultado será um número negativo. Pesquise como desprezar o sinal negativo
para sempre termos um número positivo.*/

const prompt = require('prompt-sync')()

var valor
var num

valor = parseInt(prompt("Digite um número: "))

tabu(valor, 1)
tabu(valor, 2)
tabu(valor, 3)
tabu(valor, 4)
tabu(valor, 5)
tabu(valor, 6)
tabu(valor, 7)
tabu(valor, 8)
tabu(valor, 9)
tabu(valor, 10)

function tabu(valor, ada){
    console.log(`${valor} + ${ada} = ${valor + ada}` ,'\t', `${valor} x ${ada} = ${valor * ada}`)

}