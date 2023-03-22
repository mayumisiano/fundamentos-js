var prompt = require('prompt-sync')();
var numero = parseInt(prompt('Digite um número: '));

for (var i = 1; i <= 10; i++) {
    console.log(numero*i);
}