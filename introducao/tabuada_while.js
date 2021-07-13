var prompt = require('prompt-sync')();

contador = 0;
limite = 0;

var n = parseInt(prompt('Digite um número: '));

while(contador <= limite){
    console.log(n*contador);
    contador++
}