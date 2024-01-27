/*09. Faça um algoritmo que leia os dados necessários para calcular e exibir a área:
Pesquisa na Internet como calculcar a área de cada objeto abaixo:
a) de um trapézio. b) de um quadrado. c) de um retangulo. d) de um círculo. e) de um triangulo*/

const prompt = require('prompt-sync')()

console.group('Cálculo da área do trapézio')
let base_maior = Number(prompt("Insira o valor da base maior: "))
let base_menor = Number(prompt("Insira o valor da base menor: "))
let altura = Number(prompt("Insira o valor da altura: "))

let area_trapezio = ((base_maior + base_menor) * altura) / 2

console.log(`A área do trapézio é de ${area_trapezio}`,'\n')
console.groupEnd()

console.group('Cálculo da área do quadrado')
let lado1 = Number(prompt("Insira o valor do primeiro lado: "))
let lado2 = Number(prompt("Insira o valor do segundo lado: "))

let area_quadrado = lado1 * lado2

console.log(`A área do quadrado é de ${area_quadrado}`,'\n')
console.groupEnd()

console.group('Cálculo da área do retangulo')
let base = Number(prompt("Insira o valor da base: "))
let alturaR = Number(prompt("Insira o valor da altura: "))

let area_retangulo = base * alturaR

console.log(`A área do retângulo é de ${area_retangulo}`,'\n')
console.groupEnd()

console.group('Cálculo da área do círculo')
let pi = parseFloat(3.14)
let raio = Number(prompt("Insira o valor do raio: "))

let area_circulo = pi * (raio * raio)

console.log(`A área do círculo é de ${area_circulo}`,'\n')
console.groupEnd()

console.group('Cálculo da área do triângulo')
let baseT = Number(prompt('Insira o valor da base: '))
let alturaT = Number(prompt("Insira o valor da altura: "))

let area_triangulo = (baseT * alturaT) / 2

console.log(`A área do triângulo é de ${area_triangulo}`,'\n')
console.groupEnd()