var prompt = require('prompt-sync')();

var numero = prompt('Digite um numero: ')

if(numero>10){
    console.log('O número é maior que 10!')
}

else if(numero==10){
    console.log('O número é igual a 10!')
}

else {
    console.log('O número é menor que 10!')
}

console.log('Você chegou ao final do código :)')