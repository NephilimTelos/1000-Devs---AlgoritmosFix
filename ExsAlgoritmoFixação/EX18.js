/*18. Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. 
Faça um algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar, mas faça com que Carlos e André não paguem centavos. 
Ex: uma conta de R$101,53
resulta em R$33,00 para Carlos, R$33,00 para André e R$35,53 para Felipe*/

const prompt = require('prompt-sync')()

let conta = Number(prompt('Insira o valor total da conta: '))
parte_carlos_andre = parseInt(conta / 3)
parte_felipe = conta - 2 * parte_carlos_andre

console.log(`Carlos irá pagar R$${parte_carlos_andre.toFixed(2)}, André irá pagar R$${parte_carlos_andre.toFixed(2)} e Felipe irá pagar R$${parte_felipe.toFixed(2)}`)