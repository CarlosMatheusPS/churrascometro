let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantidadeTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    console.log(quantidadeTotalCarne);
    let quantidadeTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let quantidadeTotalBebidas = bebidasPorPessoa(duracao) * adultos; + (bebidasPorPessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${Math.ceil(quantidadeTotalCarne/1000)} &#x1F969 Kg de Carne`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalBebidas/2000)} &#x1F964 Garrafas de Bebidas (2L)`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalCerveja/350)} &#x1F37A Latas de Cerveja (350ml)`
}

function carnePorPessoa(duracao) {

    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPorPessoa(duracao) {

    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPorPessoa(duracao) {

    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}