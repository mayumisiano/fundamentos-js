var nota1 = parseFloat(prompt("Digite a primeira nota: "));
var nota2 = parseFloat(prompt("Digite a segunda nota: "));
var nota3 = parseFloat(prompt("Digite a terceira nota: "));

function media(nota1, nota2, nota3) {
    var media = (nota1 + nota2 + nota3) / 3;
    return media;
}

media(nota1, nota2, nota3);
