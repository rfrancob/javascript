/* 
    função: ligar()
    autor: Raphael Franco Borges Faria
    descrição: DOM CORE API
*/ 
window.onload = function(){

   document.getElementById("botao").onclick = function(){
       //status=200, statusText=OK, responseText, responseXML
       requisitar("ajax/arquivo.xml");
       return false;
   }

   function carregando(c){
       while(c.hasChildNodes()){
           c.removeChild(c.lastChild);
       }
       var img = document.createElement("img");
       img.setAttribute("src", "ajax/ajax.gif");
       c.appendChild(img);
   }

   var r = document.getElementById("resposta");
   function mostrar(ajax){
       while(c.hasChildNodes()){
           c.removeChild(c.lastChild);
       }
               
       
       //var xml = new XML(ajax.responseText);
       //var xml = ajax.responseXML;
       //var url = xml.getElementsByTagName("url")[0].firstChild.nodeValue;
       //r.appendChild(document.createTextNode(url));
       alert(ajax.responseXML);

   }

   function requisitar(url){
       
       var ajax = iniciaAjax();
       carregando(document.getElementById("resposta"));
       ajax.onreadystatechange = function(){
           if(ajax.readyState == 4){               
               mostrar(ajax);
           }
       }
       ajax.open("POST", url);
       ajax.send(null);

   }

   function iniciaAjax(){
       var ajax = null;
       if(window.XMLhttpRequest){
           ajax = new XMLHttpRequest();
       } else if(window.ActiveXObject){
           try{
               ajax = new ActiveXObject("Msxml2.XMLHTTP");
           } catch(e){
               ajax = new ActiveXObject("Microshoft.XMLHTTP");
           }           
       }
       return ajax;
   }

}