/*16. Uma loja de decoração precisa aumentar o seu faturamento para o próximo mês em
20%. Esta loja deseja atingir este objetivo aumentando a venda de três produtos. O
produto 1 custa R$ 150 o produto 2 R$ 220,00 e o produto 3 R$ 97.00. Faça um algoritmo
que receba o valor de faturamento do último mês e apresente:
a) O faturamento do próximo mês para bater a meta de 20%. 
b) A quantidade de peças apenas do produto 1 necessárias para obter a meta desejada. 
c) A quantidade de peças apenas do produto 2 necessárias para obter a meta desejada. 
d) A quantidade de peças apenas do produto 3 necessárias para obter a meta desejada*/

const prompt = require('prompt-sync')()

let faturamento_ultimo_mes = Number(prompt("Insira o faturamento do último mês: "))

let meta_prox_mes = faturamento_ultimo_mes * 1.20
let qtd_produto1 = parseInt(meta_prox_mes / 150) +1
let qtd_produto2 = parseInt(meta_prox_mes / 220) +1
let qtd_produto3 = parseInt(meta_prox_mes / 97) +1

console.log(`A meta de vendas a ser batida no próximo mês é de R$ ${meta_prox_mes}`, `\n`,
`Devemos vender ${qtd_produto1} unidades somente do produto 1 para atingir a meta`, `\n`,
`Devemos vender ${qtd_produto2} unidades somente do produto 2 para atingir a meta`, `\n`,
`Devemos vender ${qtd_produto3} unidades somente do produto 3 para atingir a meta`)