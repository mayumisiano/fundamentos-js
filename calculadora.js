//Calculadora que recebe dois números de parâmetro e
//realiza 5 operações básicas: soma, subtração, divisão, multiplicação e potenciação;

function soma(num1, num2) {
    var resultadoDaSoma = num1 + num2;
    return resultadoDaSoma;
}

function subtracao(num1, num2) {
    return num1 + num2; 
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2){
    return num1 / num2;
}

function potencia(num1, num2){
    return num1**num2;
}

console.log('Subtração: ' + subtracao(2,5));
console.log('Soma: ' + soma(2,5));
console.log('Multiplicação: ' + multiplicacao(2,5));
console.log('Divisao: ' + divisao(2,5));
console.log('Potencia: ' + potencia(2,5));