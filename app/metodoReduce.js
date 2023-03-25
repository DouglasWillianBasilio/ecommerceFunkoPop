function calcularValorTotalDeFunkosDisponiveis(funkos) {
    return funkos.reduce((acc, funko) => acc + funko.preco, 0).toFixed(2)
}