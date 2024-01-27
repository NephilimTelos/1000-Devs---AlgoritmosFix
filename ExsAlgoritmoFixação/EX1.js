/*1. Uma imobiliária vende apenas terrenos retangulares. Faça um algoritmo para imprimir a
área do terreno e o valor de venda do mesmo. Para isto será necessário o usuário
informar as dimensões em metros (frente e lateral) do terreno além do valor cobrado pelo
metro quadrado.*/

const prompt = require('prompt-sync')()
var dimensao_lado
var dimensao_frente
var valor_terreno
var area_terreno
var valor_metro_quadrado

dimensao_lado = prompt("Informe o valor da dimensão lateral em metros:")
dimensao_frente = prompt("Informe o valor da dimensão frontal em metros:")
valor_metro_quadrado = prompt("Informe o valor monetário do metro quadrado:")
area_terreno = dimensao_lado * dimensao_frente
valor_terreno = area_terreno * valor_metro_quadrado

console.log("A área do terreno é de:",area_terreno,"m²")
console.log("O valor do terreno é de:","R$",valor_terreno)