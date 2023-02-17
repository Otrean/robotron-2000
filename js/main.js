const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatisticas]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( function(elemento){
   elemento.addEventListener("click", function(evento){
    atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
   })
})

document.querySelector("#producao").addEventListener("click", mensagem)

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");
    if(operacao === "+"){
        peca.value =  parseInt(peca.value) + 1;
    }
    else{
        if (peca.value > 0){;
            peca.value =  parseInt(peca.value) - 1;
        }
        else{
            alert("O valor do atributo não pode ser menor que 0")
        }
    }
}

function atualizaEstatisticas(peca, operacao){
    const valor = document.querySelector("[data-contador]").value
    estatisticas.forEach( function(elemento){
        if(operacao === "+"){
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas]
        }
        else{
            if(valor > 0){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatisticas]
            }
        }
    })
}

function mensagem(){
    alert("PROTOCOLO PARA PRODUÇÃO DO ROBOTRON INICIADO!!!!")
}