/*17. Uma padaria vende uma certa quantidade de pães franceses e uma quantidade de
broas a cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,60. Ao final do dia, o
dono quer saber quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve
guardar numa conta de poupança (10% do total arrecadado) para realizar uma reforma. Você foi contratado para fazer os cálculos para o dono. Com base nestes fatos, faça um
algoritmo para ler as quantidades de pães e de broas, o valor da reforma e depois calcule
o valor arrecado, o valor a ser depositado na poupança e quantos dias serão necessários, caso mantenha o mesmo faturamento, para custear a reforma.
Requisito adicional: A quantidade de dias deve ser retornado como um valor inteiro. Exemplo: 3.78 dias deverá retornar 4 dias
9.2 dias deverá retornar 10 dias
10.89 dias deverá retornar 11 dia*/

const prompt = require('prompt-sync')()

let qtd_paes = Number(prompt('Insira a quantidade de pães franceses vendidos no dia: '))
let qtd_broas = Number(prompt('Insira a quantidade de broas vendidos no dia: '))
let valor_reforma = Number(prompt('Insira quanto custará a reforma em R$: '))
let renda_dia = (qtd_paes * 0.12) + (qtd_broas * 1.60)
let conta_poupanca = renda_dia * 0.10
let dias_custear_reforma = parseInt(valor_reforma/conta_poupanca) +1
'\n'
console.log(`Com a venda de ${qtd_paes} pães franceses e ${qtd_broas} broas, arrecadamos R$${renda_dia} hoje`)
console.log(`Poderemos guardar na poupança R$${conta_poupanca} se continuarmos nesse ritmo diariamente`)
console.log(`Pelo valor da reforma ser RS${valor_reforma}, serão necessários mais ${dias_custear_reforma} dias nesse ritmo para a bancarmos`)