/* 
    autor: Raphael Franco Borges Faria
    descrição: Declarações e Estruturas
*/ 

function calcularIMC(){
    var formulario = document.getElementById("formulario");

    var kilos = +formulario.kilos.value;
    var metros = +formulario.metros.value;
    var centimetros = +formulario.centimetros.value;
    
    var altura = ((metros * 100) + 83)/100;
    var imc = kilos / (altura * altura);

    var classificacao;

    formulario.imc.value = imc.toFixed(2);

    if(imc < 20){
        classificacao = "Abaixo do Peso";
        formulario.classificacao.value = classificacao;
    } else if(imc > 20 && imc <= 25){
        classificacao = "Peso Ideal";
        formulario.classificacao.value = classificacao;
    } else if(imc > 25 && imc <= 30){
        classificacao = "Sobrepeso";
        formulario.classificacao.value = classificacao;
    } else if(imc > 30 && imc <= 35){
        classificacao = "Obesidade Moderada";
        formulario.classificacao.value = classificacao;
    } else if(imc > 35 && imc <= 40){
        classificacao = "Obesidade Severa";
        formulario.classificacao.value = classificacao;
    } else if(imc > 40 && imc <= 50){
        classificacao = "Obesidade Mórbida";
        formulario.classificacao.value = classificacao;
    } else {
        classificacao = "Superobesidade";
        formulario.classificacao.value = classificacao;
    }
}