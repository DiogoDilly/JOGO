var tentativas = 0;
const advinhacao = Math.floor(Math.random() * 100);
var nombre = document.getElementById("nome").value;
document.getElementById("tenta")
document.getElementById("palavras");
document.getElementById("palavras2");
document.getElementById("palavras3")
function jogo() {
    var valordado = document.getElementById("inserido").value.trim();
    if (valordado == advinhacao) {
        window.location.href = "fim.html"
    
    } else if (valordado < 1) {
        palavras.textContent = "!!COOLOQUE UM NUMERO VALIDO!!";
        palavras.style.color = "red";
    }else if (valordado > 100) {
        palavras.textContent = "!!COOLOQUE UM NUMERO VALIDO!!";
        palavras.style.color = "red";
    }
    else if (valordado  === "") {
        palavras.textContent = "COLOQUE UM NUMERO";
        palavras.style.color = "red";
    } else if (valordado > advinhacao) {
        tentativas = tentativas + 1;
        palavras.textContent = "ERROU,tente algo menor do que " + valordado;
        palavras.style.color = "red";
        tenta.textContent = "tentativas:"+ tentativas;
    } else if (valordado < advinhacao) {
        tentativas = tentativas + 1;
        palavras.textContent = "ERROU,tente algo maior do que " + valordado;
        palavras.style.color = "red";
        tenta.textContent = "tentativas:"+ tentativas;
    }
    if (tentativas > 0) {
        tenta.style.color = "green";
    }
    if (tentativas > 10) {
        tenta.style.color = "yellow"
    }
    if (tentativas > 20){
    tenta.style.color = "red"
    }
}
function acessar() {
    window.location.href = "jogo.html"
}
function entradao(){
    var nomezão = document.getElementById("nome").value.trim();
        if (nomezão === "") {
            aviso.textContent = "!!COLOQUE UM NOME!!"
            aviso.style.color = "red"
    }else{
         window.location.href = "jogo.html"
    }
    }