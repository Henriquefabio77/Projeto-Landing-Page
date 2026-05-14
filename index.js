var SetaDireita =window.document.getElementById("Seta-direita")
var Leonardo =window.documentgetElementByid("Leonardo")
var Samanta =window.documentgetElementByid("Samanta")
var Bruna =window.documentgetElementByid("Bruna")
var SetaEsquerda =window.document.getElementById("Seta-esquerda")

function RolarParaDireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    SetaDireita.style ="display:none"
    SetaEsquerda.style ="display:flex; margin-top:55px"
}

function RolarParaESquerda() {
    Leonardo.style ="display:flex"
    Bruna.style ="display:none"
SetaDireita.style ="display:flex;margin-top:55px"
    SetaEsquerda.style ="display:none"
}