/*15. A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, R$15,00 por hora
extra e R$ 90 reais por cada dependente menor que 6 anos. Faça um algoritmo que
solicite a quantidade de horas normais e extras trabalhadas no mês além da quantidade
de dependentes menores que 6 anos. Considere que o salário líquido é igual ao salário de
horas normais descontando-se 11% de impostos. O salário final é o salário liquido mais o
valor recebido por cada dependente mais*/

const prompt = require('prompt-sync')()

let qtd_hrs_normais = Number(prompt('Insira a quantidade de horas trabalhadas: '))
let qtd_hrs_extras = Number(prompt('Insira a quantidade de horas extras trabalhadas: '))
let qtd_dependentes = Number(prompt('Insira a quantidade de dependentes menores de 6 anos: '))
let qtd_dias_mes = Number(prompt('Insira a quantidade de dias trabalhados no mês: '))

let pagamento_hrs = ((qtd_hrs_normais * 10) * qtd_dias_mes) * 0.89
let pagamento_hrs_extras = (qtd_hrs_extras * 15) * qtd_dias_mes
let pagamento_dependentes = qtd_dependentes * 90
let salario_final = pagamento_hrs + pagamento_dependentes + pagamento_hrs_extras

console.log('Seu salário final deste mês é de R$', salario_final)

