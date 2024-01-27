/*6. Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar
todos os cavalos comprados para um haras. O usuário devera informar a quantidade de
cavalos adquiridos.*/

const prompt = require('prompt-sync')()

let cavalos
let ferraduras_necessarias

cavalos = Number(prompt('Insira a quantidade de cavalos '))
ferraduras_necessarias = cavalos * 4

console.log(`Você precisará de ${ferraduras_necessarias} ferraduras para equipar todos os ${cavalos} cavalos`)
