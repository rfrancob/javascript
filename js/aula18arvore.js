/* 
    função: ligar()
    autor: Raphael Franco Borges Faria
    descrição: DOM CORE API
*/ 
window.onload = function(){

    /* Navegar na Árvore do Documento */

    /* Tipos de Nós (Documento, Elemento, Atributo e TExto) */

    /* Parentesco dos Nós (Pai=parent, Filho=child, Irmãos=sibling) */
    var div = document.getElementsByTagName("div").item(0);
    var ul = div.childNodes.item(0);
    alert(ul.firstChild.firstChild);
    //alert(div);//Elemento
    //alert(div.parentNode);//pai
    //alert(div.childNodes);//filhos

    
    //alert(ul);//filhos
    //alert(ul.nodeName);
    //alert(ul.nodeType);//1 elemento; 2 atributo; 3texto;

    //alert(ul.childNodes.item(0));
    //alert(ul.firstChild);

    

}