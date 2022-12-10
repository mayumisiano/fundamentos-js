// Calculando a soma dos valores de uma PA *//
// Explicando as diferenças entre 'const' e 'let' *//

const valorInicial = 13;
const razao = 5;
const quantidade = 5;
let elemento;
let soma = 0;

elemento = valorInicial;
for (let contador = 0; contador < quantidade; contador++){
    
    console.log(elemento);
    soma += elemento; // A variável soma é inicializada em 0, e vai
                      // adicionando novos valores conforme a posição do elemento.
    elemento += razao; // O elemento é somado à razão, e depois
                        //vai ser novamente somado à variável soma.
}
    console.log(`Soma = ${soma}`);
