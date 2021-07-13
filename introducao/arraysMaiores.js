//Verificando se os números são maiores ou menores que 1-
//dentro de um array;

var array= [5, 6, 11, 12, 6, 50, 8, 9, 19, 46, 53, 2, 8, 10];
var maiorQueDez = 0;
var menorQueDez = 0;

for(var i = 0; i < array.length; i++) {
    if (array[i] > 10) {
        maiorQueDez += 1; //Contando os valores encontrados no array; 
        }    
        else if(array[i] < 10){
            menorQueDez += 1;
        }
    }
    console.log('Maiores que 10: ' + maiorQueDez);
    console.log('Menores que 10: ' + menorQueDez);
 