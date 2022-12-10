//Dado um intervalo determinado por dois valores(inicial e final),
//determine quais são os números pares entre eles.

valorInicial= 3;
valorFinal = 35;

elemento = valorInicial;
for (var elemento = valorInicial; elemento<= valorFinal; elemento++) {
    if (elemento % 2 == 0 ) {
        console.log(elemento);
     }
}