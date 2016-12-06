/* 
    função: ligar()
    autor: Raphael Franco Borges Faria
    descrição: DOM HTML/CORE API
*/ 
window.onload = function(){

    /*
        Localizar Elementos 
        By: id, name, class, tag, selector
     */
    var tit = document.getElementById("tit_id");
    tit = document.getElementsByName("tit_name");
    tit = document.getElementsByClassName("tit_class");
    tit = document.getElementsByTagName("h2");
    tit = document.querySelectorAll("#tit_id");
    //alert(tit);

    //tit.innerHTML = "Outro Texto!";

    //tit.style.color = "#0000ff";//DOM HTML API

    //tit.setAttribute("style", "collor:#0000ff");//DOM CORE API

    var img = document.getElementsByTagName("img")[0];
    //img.border = "6px";
    //img.setAttribute("border", "6px");

    /* Coleções de Elementos */
    //var img = document.images;
    //for(var i=0; i<img.length; i++){
        //alert(img[i].alt);
    //}
    //alert(img[0]);
    //alert(img.item(0));
    //alert(img.namedItem("selecionada"));

    //alert(document.forms.length);

    /*Alterar Elementos */
    //alert(tb);
    

    var btn = document.getElementById("btn");
    btn.onclick = function(){
        var l = document.images;
        for(var i=0; i<l.length; i++){
            adiconarLinha(l[1].alt, l[i].src);
        }
    }

    var btn2 = document.getElementById("del");
    btn.onclick = function(){
        var tb = document.getElementsByTagName("table").item(0);
        tb.deleteRow(1);
    }
    
    //alert(document.forms[0].elements.nome.value="teste");
    alert(document.forms[1].elements.estado[1].value);
}

function adiconarLinha(texto1, texto2){
    var tb = document.getElementsByTagName("table").item(0);
    var row = tb.insertRow(-1);
    var cel1 = row.insertCell(0);
    var cel2 = row.insertCell(1);
    cel1.appendChild(document.createTextNode(texto1));
    cel2.appendChild(document.createTextNode(texto2));
}