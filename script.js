function addBalao() {
    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");
    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);
    balao.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
    balao.setAttribute("onclick", "estourar(this)");
    
    document.getElementById("area").appendChild(balao);
}
function estourar(elemento) {
    document.getElementById("area").removeChild(elemento);
}
function iniciar() {
    setInterval(addBalao, 800);
}