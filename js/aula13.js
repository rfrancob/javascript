/* 
    Autor: Raphael Franco Borges Faria
    Descrição: Eventos Javascript
*/

window.onload = function (){
    document.getElementById("texto").focus();
    var botao = document.getElementById("botão");
    var div1 = document.getElementById("primeira");

    botao.onclick = function(e){
        //alert(this.id);
        //document.getElementById("texto").onblur();

    }
    document.getElementById("texto").onblur = function(e){
        alert(this.value);
    }
}