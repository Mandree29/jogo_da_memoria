var listajogo = ["./imagens/abassi.jpg", "./imagens/china.jpg", 
"./imagens/Delhi.jpg", "./imagens/england.jpg", "./imagens/france.jpg", "./imagens/holly.jpg",
"./imagens/mongols.jpg", "./imagens/rus.jpg"]

//seleção da bandeiras da primeira seção atrás da capa
var band_sec1 = document.querySelectorAll('.bandeiras_sec1')
var band_sec2 = document.querySelectorAll('.bandeiras_sec2')

//selecionar todas as divs da primeira seção
var box_sec1 = document.querySelectorAll('.img_sec1')//sssão 1
var box_sec2 = document.querySelectorAll('.img_sec2')// sessão 2

//selecionar a seção de cima como uma classlist
var sec1 = document.querySelector('.sessao1')
var sec2 = document.querySelector('.sessao2')


var capa1 = ''
var carta1 = ''
var capa2 = ''
var carta2 = ''


var jogada1 = ''
var jogada2 = ''
var pontos = 0


//função embaralhar 
function embaralhar(arr){
    for(let i = arr.length - 1; i > 0; i--){
      let pos_randon = Math.floor(Math.random() * (i + 1))
      let temp = arr[i]
      arr[i] = arr[pos_randon]
      arr[pos_randon] = temp
    }
    return arr
  }

// função carregar o jogo
function carregar_jogo(){
    embaralhar(listajogo)
    for (let i = 0; i < listajogo.length; i++){
        band_sec1[i].setAttribute('src',listajogo[i])
        band_sec1[i].style.display = 'none'
    }
    embaralhar(listajogo)
    for (let i = 0; i < listajogo.length; i++){
        band_sec2[i].setAttribute('src',listajogo[i])
        band_sec2[i].style.display = 'none'
    }
    neutralizarSelecao2()
    ativarSessao1()

}

function neutralizarSelecao1(){
    for (let i = 0; i < box_sec1.length; i++){
        box_sec1[i].style.cursor = "auto"
        box_sec1[i].removeEventListener('click', virar_carta)
    }
}


function neutralizarSelecao2(){
    for (let i = 0; i < box_sec2.length; i++){
        box_sec2[i].style.cursor = "auto"
    }

}

function neutralizarSelecao2SegundaVez(){
    for (let i = 0; i < box_sec2.length; i++){
        box_sec2[i].style.cursor = "auto"
        box_sec2[i].removeEventListener('click', encontrarPar)
    }

}

function ativarSessao1(){
    for(let i = 0; i < box_sec1.length; i++){
        box_sec1[i].addEventListener('click', virar_carta)
        box_sec1[i].style.cursor = "pointer"
    }
}

function ativarsessao2(){
    for(let i = 0; i < box_sec2.length; i++){
        box_sec2[i].addEventListener('click', encontrarPar)
        box_sec2[i].style.cursor = "pointer"
    }
}



function virar_carta(){
    capa1 = this.firstElementChild
    carta1 = this.lastElementChild
    capa1.style.display = 'none'
    carta1.style.display = 'inline'
    jogada1 = carta1.getAttribute('src')
    neutralizarSelecao1()
    ativarsessao2()
    return capa1, carta1

}

function encontrarPar(){
    capa2 = this.firstElementChild
    carta2 = this.lastElementChild
    capa2.style.display = 'none'
    carta2.style.display = 'inline'
    jogada2 = carta2.getAttribute('src')
    neutralizarSelecao2SegundaVez()
    ativarSessao1()
    setTimeout(verificarPar, 3000)
    return capa2, carta2

}

function verificarPar(){
    if(jogada1 === jogada2){
        pontos += 1
        jogada1 = ''
        jogada2 = ''
        carta1.style.display = 'none'
        carta2.style.display = 'none'
    }else {
        carta1.style.display = 'none'
        capa1.style.display = 'inline'
        carta2.style.display = 'none'
        capa2.style.display = 'inline'
        jogada1 = ''
        jogada2 = ''
    }


}


//mandar carregar o jogo quando carregar a pagina
window.addEventListener('load', carregar_jogo, false)
