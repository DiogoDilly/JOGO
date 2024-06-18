var tentativas = 0;
var advinhacao = Math.floor(Math.random() * 10);
var nombre = document.getElementById("nome");
document.getElementById("tenta")
document.getElementById("palavras");
document.getElementById("palavras2");
document.getElementById("palavras3")
function jogo() {
    var valordado = document.getElementById("inserido").value;
    if (valordado == advinhacao) {
        window.location.href = "fim.html"
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
    if (tentativas > 5) {
        tenta.style.color = "yellow"
    }
    if (tentativas > 15){
    tenta.style.color = "red"
    }
}
function acessar() {
    window.location.href = "jogo.html"
}
function ver() {
    palavras2.textContent = nombre + " parabens o numero era: " + advinhacao ;
    palavras2.style.color = "green";
}
