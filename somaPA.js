var valorInicial = 13;
var razao = 5;
var quantidade = 5;
var elemento;
var soma = 0;


// Calculando a soma dos valores de uma PA

elemento = valorInicial;
for (var contador = 0; contador < quantidade; contador++){
    
    console.log(elemento);
    soma += elemento; // A variável soma é inicializada em 0, e vai
    // adicionando novos valores conforme a posição do elemento.
    elemento += razao; // O elemento é somado à razão, e depois
    //vai ser novamente somado à variável soma.
}
    console.log(`Soma = ${soma}`);
