let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")



async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then (function(resposta){
       return resposta.json()
    })
    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high
    console.log(dolar)
    console.log(euro)

    let inputValorEmReias = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    let ValorEmDolares = inputValorEmReias / dolar

    inputMoedas.innerHTML = ValorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    textoReal.innerHTML = inputValorEmReias.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    if (select.value == "US$ Dólar Americano") {
        let ValorEmDolares = inputValorEmReias / dolar
        inputMoedas.innerHTML = ValorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    if (select.value == "€ Euro") {
        let valorEmEuros = inputValorEmReias / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

    }

}

function TrocaDeMoeda() {

    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value == "US$ Dólar Americano") {
        textoMoedas.innerHTML = "Dolar Americano"
        bandeiraMoedas.src = "./img/estados.unidos.png"
    }

    if (select.value == "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/Euro.png"
    }

    converterMoedas()
}



botao.addEventListener("click", converterMoedas);
select.addEventListener("change", TrocaDeMoeda)









