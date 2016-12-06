/* 
    Cliente: Cinepolis
    Autor: Raphael Franco Borges Faria
    Descrição: Scripts para localização
               de poltronas disponíveis no cimema;
*/

window.onload = function(){
    carregarPoltronas();
} 
//true = diponivel
//false= ocupada
var poltronas = [false, true, false, true, true, true, false, true, false];
function carregarPoltronas(){
    var imagens = document.getElementsByTagName("img");
    for(var i=0; i<imagens.length; i++){
        if(poltronas[i]){
            imagens[i].src = "img/disponivel.png";
        }
        else{
            imagens[i].src = "img/ocupada.png";
        }
    }
}

function selecionarPoltrona(){
    var imagens = document.getElementsByTagName("img");
    for(var i=0; i<poltronas.length; i++){
       if(poltronas[i]){
           imagens[i].src = "img/selecionada.png";

           var quer = confirm("Você quer esta poltrona?");
           if(quer){
               break;
           } else{
               imagens[i].src = "img/disponivel.png";
           }
        }
    }
}

function selecionarPoltronaParaCasal(){
    var imagens = document.getElementsByTagName("img");
    for(var i=0; i<poltronas.length; i++){
       if(poltronas[i] && poltronas[i+1]){
           imagens[i].src = "img/selecionada.png";
           imagens[i+1].src = "img/selecionada.png";

           var quer = confirm("Você quer estas poltronas?");
           if(quer){
               break;
           } else{
               imagens[i].src = "img/disponivel.png";
               imagens[i+1].src = "img/disponivel.png";
           }
        }
    }
}

