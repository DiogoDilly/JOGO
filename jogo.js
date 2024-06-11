var tentativas = 0; 
var advinhacao = Math.floor(Math.random() * 10) +1;
function jogo() {
    
    document.getElementById("palavras");
    var valordado = document.getElementById("inserido").value;
    if (valordado == advinhacao) {
       
        palavras.textContent = " O NUMERO ERA:"+advinhacao+" SUAS TENTATIVAS FORAM:" +tentativas;
        tentativas = 0;
        var advinhacao = Math.floor(Math.random() * 10) +1;
    } else {
        tentativas = tentativas + 1;       
        palavras.textContent = "ERROU" ;
    }
}
function novamente(){
    Window.location.href = "fim.html";
}