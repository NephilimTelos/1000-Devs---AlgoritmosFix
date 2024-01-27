/*14. A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas
fatias de queijo, uma fatia de presunto e uma rodela de hambúrguer. Sabendo que cada
fatia de queijo ou presunto pesa 50 gramas, e que a rodela de hambúrguer pesa 120
gramas, faça um algoritmo em que o dono forneça a quantidade de sanduíches a fazer, e
a máquina informe as quantidades (em quilos) de queijo, presunto e carne necessários
para compra.*/

const prompt = require('prompt-sync')()

let qtd_sanduiches = Number(prompt('Insira a quantidade de sanduíches a fazer: '))

let qtd_queijo = 50 * (qtd_sanduiches * 2)
let qtd_presunto = 50 * qtd_sanduiches
let qtd_hamburguer = 120 * qtd_sanduiches

console.log(`Serão necessários ${qtd_queijo} gramas de queijo, ${qtd_presunto} gramas de presunto e ` ,`
${qtd_hamburguer} gramas de hambúrguer para produzir ${qtd_sanduiches} sanduíches`)