/*13. A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350
ml, garrafa de 600 ml e garrafa de 2 litros. Se um comerciante compra uma determinada
quantidade de cada formato, faça um algoritmo para calcular quantos litros de refrigerante
ele comprou.*/

const prompt = require('prompt-sync')()

let qtd_350ml = Number(prompt('Informe a quantidade de latas de 350ml que comprará: '))
let qtd_600ml = Number(prompt('Informe a quantidade de garrafas de 600ml que comprará; '))
let qtd_2l = Number(prompt('Informe a quantidade de garrafas de 2l que comprará: '))

let volume_total = (qtd_350ml * 0.350) + (qtd_600ml * 0.600) + (qtd_2l * 2)

console.log(`A quantidade de refrigerante que irá comprar, em litros, é de ${volume_total} litros`)