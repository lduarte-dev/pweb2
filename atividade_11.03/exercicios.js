import {area_circulo, calculadora, eh_triangulo, tipo_triangulo} from './funcoes.js'
// atividade 1 - Area do Circulo
let raio = 10 
let area = area_circulo(raio)

console.log(area)

// atividade 2 - Calculadora
let num1 = 4
let num2 = 3
let operador = "+"

let calcular = calculadora(num1,num2,operador)
   
console.log(calcular)

// atividade 3 - Triangulo
let lado1 = 10
let lado2 = 10
let lado3 = 10

let triangulo = eh_triangulo(lado1,lado2,lado3)

let resposta = ""
if (triangulo === true) {
    resposta = tipo_triangulo(lado1,lado2,lado3)
} else {
    resposta = "Não é Triangulo"
}



console.log(resposta)