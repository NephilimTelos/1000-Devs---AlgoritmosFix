/*19. Entrar com o dia e o mês de uma data e informar quantos dias se passaram desde o
início do ano. Esqueça a questão dos anos bissextos e considere sempre que um mês
possui 30 dias.*/

const prompt = require('prompt-sync')()



let dia = Number(prompt('Insira o dia atual: '))
let mes = Number(prompt('Insira o número do mês atual: '))

if (mes < 1 || mes > 12 || dia < 1 || dia > 30)
{
    console.log('Data inválida.')
    return 'Data inválida.'
}

let dias_passados = (mes - 1) * 30 + dia

console.log(`Se passaram ${dias_passados} dias desde o início do ano.`)