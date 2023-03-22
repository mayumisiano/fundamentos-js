var numero = prompt('Insira um número: ');

dobro = numero * 2;
metade = numero / 2;

if(numero.type != Number){
    alert('Valor inválido, insira um número');
}else{
    alert('O dobro do número é: '+ ' ' + dobro + '. ' + 'A metade do número é: ' + metade);
}


