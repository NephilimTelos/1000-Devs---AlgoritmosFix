/*11. Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de
maracujá. Faça um algoritmo para calcular quantos litros de água e de suco são
necessários para se fazer uma certa quantidade de litros de refresco informados pelo
usuário.*/

const prompt = require('prompt-sync')()

let fazer_refresco = Number(prompt('Insira quantos tonels de refresco deseja: '))
let agua_necessaria = 8 * fazer_refresco
let suco_necessario = 2 * fazer_refresco

console.log(`Para fazer ${fazer_refresco} tonels de refresco, serão necessários`, '\n',
`${agua_necessaria} litros de água e ${suco_necessario} litros de suco` )