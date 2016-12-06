/* 
    Autor: Raphael Franco Borges Faria
    Descrição: Eventos Javascript
*/

window.onload = function (){
    var botao = document.getElementById("botão");
    var div1 = document.getElementById("primeira");
    botao.onclick = function(e){
        alert("botão");

        this

        var evt = e ? e : window.event;
        if(evt.stopPropagation){
            evt.stopPropagation();
        } else{
            evt.cancelBubble = true;
        }
    }
    div1.onclick = function(){
        alert("div");
    }
    document.onclick = function(){alert("document");}
    
    //botao.removeEventListener("click", um, false);
    //botao.addEventListener("click", um, false);
    
    var btn = document.getElementById("btn");
    //btn.addEventListener("click", um, false);
    btn.onclick = function(evt){
        var oEvento = evt ? evt : window.event;
        alert("X="+oEvento.screenX +" Y="+oEvento.screenY);
        //alert(oEvento.type);    
    }

    //btn.onclick = function(){return false;}
}

function um(){
    alert('um');
}

function dois(){
    alert('dois');
}