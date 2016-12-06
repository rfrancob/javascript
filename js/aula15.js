/* 
    função: ligar()
    autor: Raphael Franco Borges Faria
    descrição: Eventos Javascript - Temporizadores e Cookies
*/ 

window.onload = function(){
    document.getElementById("xti").onclick = ligar;
    setInterval(apresentaHoras, 1000);

    var nome = readCookie("nome");
    if(nome == null){
        nome = prompt("Qual o seu nome?");
        writeCookie("nome", nome, 1);
    }
}

function ligar(){
	document.getElementById("xti").src = "img/xlamp_on.png"

    var nome = readCookie("nome");
    if(nome != null){
       alert("É bom estar com você, " + nome);
    }
    
    setTimeout("desligar()", 3000);
    /** var chave = setTimeout("desligar()", 3000); */
    //clearTimeout(chave);
}

function desligar(){
	document.getElementById("xti").src = "img/xlamp_off.png"
}

function apresentaHoras(){
    var agora = new Date();
    var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds();
    document.getElementById("horas").innerHTML = horas;
}