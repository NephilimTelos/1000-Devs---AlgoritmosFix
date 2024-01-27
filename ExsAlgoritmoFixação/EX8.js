/*8. Faça um algoritmo para ler o salário de um funcionário e aumentá-Io em 15%. Após o
aumento, desconte 11% de INSS e 8% de FGTS. Imprima o salário inicial, o salário com o
aumento, o salário final, o desconto do INSS, o desconto do FGTS e o Total de Descontos
(INSS+FGTS).*/

const prompt = require('prompt-sync')()

let salario_inicial = Number(prompt('Insira o seu salário: '))
let salario_aumentado = salario_inicial * 1.15
let desconto_INSS = salario_aumentado * 0.11
let desconto_FGTS = salario_aumentado * 0.08
let salario_final =  salario_aumentado - desconto_FGTS - desconto_INSS
let total_descontos = desconto_FGTS + desconto_INSS

console.log((`O seu salário inicial equivale a R$ ${salario_inicial}`))
console.log((`Com 15% de aumento ele equivale a R$ ${salario_aumentado}`))
console.log((`O desconto do INSS equivale a R$ ${desconto_INSS}`))
console.log((`O desconto do FGTS equivale a R$ ${desconto_FGTS}`))
console.log((`A soma dos descontos equivale a R$ ${total_descontos}`))
console.log((`Com o aumento e os descontos aplicados, seu salário equivale a R$ ${salario_final}`))