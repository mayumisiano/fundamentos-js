function saudacao(nome){
    var hora = new Date().getHours();
    if (hora < 12){
        console.log('Bom dia, ' + nome);
    }
    else if (hora < 18){
        console.log('Boa tarde, ' + nome);
    }
    else{
        console.log('Boa noite, ' + nome)
    }
}
saudacao('Paula');
saudacao('Mayumi');