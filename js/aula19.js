/* 
    função: ligar()
    autor: Raphael Franco Borges Faria
    descrição: DOM CORE API
*/ 
window.onload = function(){

   document.getElementById("botao").onclick = function(){
       //status=200, statusText=OK, responseText, responseXML

       var ajax = new XMLHttpRequest();
       var r = document.getElementById("resposta");
       ajax.onreadystatechange = function(){
           if(ajax.readyState == 4){
               //alert(ajax.responseText);
               //r.appendChild(document.createTextNode(ajax.responseText));
               //r.innerHTML = ajax.responseText;

               var xml = ajax.responseXML;
               var url = xml.getElementsByTagName("url")[0].firstChild.nodeValue;
               r.appendChild(document.createTextNode(url));

           }
       }
       ajax.open("POST", "ajax/arquivo.xml");
       ajax.send(null);

       return false;
   }

}