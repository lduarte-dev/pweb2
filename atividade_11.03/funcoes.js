// atividade 1 - Area do Circulo
function area_circulo(raio) {
    const PI = 	3.141592653589793
    let area = PI * raio**2
    return area
}

// atividade 2 - Calculadora
function calculadora(num1,num2,operador){
    switch (operador){
    case "+":
        return  num1 + num2
    case "-":
        return  num1 - num2
    case "*":
        return  num1 * num2
    case "/":
        return num1 / num2

    } 
}
// atividade 3 - Triangulo
function eh_triangulo(lado1,lado2,lado3){
    if (((lado1 + lado2) > lado3)  && ((lado1 + lado3) > lado2)  && ((lado2 + lado3) > lado1 )){
        return true
    }else {
        return false
    }
}
function tipo_triangulo(lado1,lado2,lado3){
    if (lado1 === lado2 && lado2 === lado3 ){
        return "equilatero"
    } else if (lado1 === lado2 && lado2 !== lado3 || lado2 === lado3 && lado3 !== lado1 || lado1 === lado3 && lado3 !== lado2){
        return "isosceles"
    } else{
        return "escaleno"
    }
}



export { area_circulo, calculadora, eh_triangulo, tipo_triangulo}