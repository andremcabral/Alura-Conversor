function Converter() {
    var valorInicial,
        valorFinal,
        moedaOrigem,
        moedaDestino,
        valorDolar,
        valorEuro,
        valorConvertidoElemento;
    valorDolar = 5.3646;
    valorEuro = 6.2192;
    valorConvertidoElemento = document.getElementById("valorConvertido");
    moedaOrigem = document.getElementById("selecionaOrigem").value;
    moedaDestino = document.getElementById("selecionaDestino").value;
    valorInicial = parseFloat(document.getElementById("valor").value);
    if (moedaDestino != moedaOrigem) {
        if (moedaDestino == "dolares" && moedaOrigem == "reais") {
            valorFinal = valorInicial / valorDolar;
        } else if (moedaDestino == "dolares" && moedaOrigem == "euros") {
            valorFinal = valorInicial * (valorEuro / valorDolar);
        } else if (moedaDestino == "reais" && moedaOrigem == "dolares") {
            valorFinal = valorInicial * valorDolar;
        } else if (moedaDestino == "reais" && moedaOrigem == "euros") {
            valorFinal = valorInicial * valorEuro;
        } else if (moedaDestino == "euros" && moedaOrigem == "reais") {
            valorFinal = valorInicial / valorEuro;
        } else if (moedaDestino == "euros" && moedaOrigem == "dolares") {
            valorFinal = valorInicial / (valorEuro / valorDolar);
        }
        valorDestino =
            "O valor de " +
            valorInicial +
            " " +
            moedaOrigem +
            " equivale a " +
            valorFinal +
            " " +
            moedaDestino;
        valorConvertidoElemento.innerHTML = valorDestino;
    } else {
        valorConvertidoElemento.innerHTML = "Escolha moedas diferentes!";
    }
}