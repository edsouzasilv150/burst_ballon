function addBalao() {
    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");
    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);
    balao.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
    balao.setAttribute("onclick", "estourar(this)");
    
    document.getElementsByClassName(balao);
}
function estourar(elemento) {
    document.body.removeChild(elemento);
}
function iniciar() {
    setInterval(addBalao, 1500);
}