// function nome() { }
// const nome = () => 

const pa = ({
    valorInicial = 13,
    razao = 5,
    quantidade = 5}) => {
    let soma = 0;
    let elemento;

elemento = valorInicial;
for (let contador = 0; contador < quantidade; contador++){
    
    console.log(elemento);
    soma += elemento; // A variável soma é inicializada em 0, e vai
                      // adicionando novos valores conforme a posição do elemento.
    elemento += razao; // O elemento é somado à razão, e depois
                        //vai ser novamente somado à variável soma.
}
    console.log(`Soma = ${soma}`);
}
pa({
    valorInicial: 13,
    razao: 5,
    quantidade: 5
});