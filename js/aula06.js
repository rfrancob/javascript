/* 
    autor: Raphael Franco Borges Faria
    descrição: estudo dos operadores JavaScript
*/ 

function calcularIMC(){
    var formulario = document.getElementById("formulario");

    var kilos = +formulario.kilos.value;
    var metros = +formulario.metros.value;
    var centimetros = +formulario.centimetros.value;
    
    var altura = ((metros * 100) + 83)/100;
    var imc = kilos / (altura * altura);

    formulario.imc.value = imc.toFixed(2);
}