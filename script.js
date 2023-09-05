const botao = document.querySelector(".botao-click")
const opcao1 = document.querySelector(".opcao-selecionada-01")
const opcao2 = document.querySelector(".opcao-selecionada-02")
const nomeMoeda1 = document.querySelector("#moedaValor1")
const nomeMoeda2 = document.querySelector("#moedaValor2")

function converter(){
    const valorInformado = document.querySelector(".valorInformado").value
    let realHoje, dolarHoje, euroHoje, libraHoje, bitcoinHoje;

    if (opcao1.value == opcao2.value) {
        alert("ERRO! As moedas precisam ser diferentes. Tente novamente !")
        nomeMoeda1.innerHTML = "-"
        nomeMoeda2.innerHTML = "-"
    }

    if (valorInformado == "") {
        alert("Necessário digitar um valor a ser convertido")
    }

    if (opcao1.value == "real") {
        dolarHoje = 4.87
        euroHoje = 5.28
        libraHoje = 6.15
        bitcoinHoje = 127135.54
        nomeMoeda1.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorInformado)
    }

    if (opcao1.value == "dolar") {
        realHoje = 0.21
        euroHoje = 1.08
        libraHoje = 1.26
        bitcoinHoje = 26083.90
        nomeMoeda1.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorInformado)
    }

    if (opcao1.value == "euro") {
        realHoje = 0.19
        dolarHoje = 0.92
        libraHoje = 1.17
        bitcoinHoje = 24075.18
        nomeMoeda1.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorInformado)
    }

    if (opcao1.value == "libra") {
        realHoje = 0.16
        dolarHoje = 0.79
        euroHoje = 0.86
        bitcoinHoje = 20650.66
        nomeMoeda1.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(valorInformado)
    }

    if (opcao1.value == "bitcoin") {
        realHoje = 0.0000079
        dolarHoje = 0.000038
        euroHoje = 0.000042
        libraHoje = 0.000048
        nomeMoeda1.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(valorInformado)
    }

 // ---------------    SEGUNDA PARTE DO CÓDIGO --------------

    if (opcao2.value == "dolar") {
        nomeMoeda2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorInformado / dolarHoje)
    }

    if (opcao2.value == "euro") {
        nomeMoeda2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorInformado / euroHoje)
    }

    if (opcao2.value == "libra") {
        nomeMoeda2.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(valorInformado / libraHoje)
    }

    if (opcao2.value == "bitcoin") {
        nomeMoeda2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(valorInformado / bitcoinHoje)
    }

    if (opcao2.value == "real") {
        nomeMoeda2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorInformado / realHoje)
    }

}

function mudouOpcao() {
    const nomeConvertido1 = document.querySelector("#nome-convertido1")
    const imagemConvertida1 = document.querySelector("#imagem-convertida1")
    const nomeConvertido2 = document.querySelector("#nome-convertido2")
    const imagemConvertida2 = document.querySelector("#imagem-convertida2")
 
    if (opcao1.value == "real") {
        nomeConvertido1.innerHTML = "Real"
        imagemConvertida1.src = "./assets/real-img.png"
    }

    if (opcao1.value == "dolar") {
        nomeConvertido1.innerHTML = "Dólar americano"
        imagemConvertida1.src = "./assets/dolar-img.png"
    }

    if (opcao1.value == "euro") {
        nomeConvertido1.innerHTML = "Euro"
        imagemConvertida1.src = "./assets/euro-img.png"
    }

    if (opcao1.value == "libra") {
        nomeConvertido1.innerHTML = "Libra"
        imagemConvertida1.src = "./assets/libra-img.png"
    }

    if (opcao1.value == "bitcoin") {
        nomeConvertido1.innerHTML = "Bitcoin"
        imagemConvertida1.src = "./assets/bitcoin-img.png"
    }

    if (opcao2.value == "real") {
        nomeConvertido2.innerHTML = "Real"
        imagemConvertida2.src = "./assets/real-img.png"
    }

    if (opcao2.value == "dolar") {
        nomeConvertido2.innerHTML = "Dólar americano"
        imagemConvertida2.src = "./assets/dolar-img.png"
    }

    if (opcao2.value == "euro") {
        nomeConvertido2.innerHTML = "Euro"
        imagemConvertida2.src = "./assets/euro-img.png"
    }

    if (opcao2.value == "libra") {
        nomeConvertido2.innerHTML = "Libra"
        imagemConvertida2.src = "./assets/libra-img.png"
    }

    if (opcao2.value == "bitcoin") {
        nomeConvertido2.innerHTML = "Bitcoin"
        imagemConvertida2.src = "./assets/bitcoin-img.png"
    }

    converter()
}

opcao2.addEventListener("change", mudouOpcao)
opcao1.addEventListener("change", mudouOpcao)
botao.addEventListener("click", converter)