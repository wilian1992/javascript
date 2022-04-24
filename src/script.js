function calcularMedia( notas ){
const caularMedia = () => {

    let soma = 0;
    for( c = 0; c < notas.length; c++){
        soma += notas[c];
}

media = soma / notas.length;

return media;

}

let media; // escopo global

function aprovação( notas ) {
    
    let media = calcularMedia( notas ); // escopo da função

    let condição = media >= 8 ? "aprovado" : "reprovado";

    return 'Média'  + media +  - ' Resultado: ' + condicao;
}