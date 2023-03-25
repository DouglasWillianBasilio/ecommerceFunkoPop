let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarFunkosPorPreco)

function ordenarFunkosPorPreco(){
    let funkosOrdenados = funkos.sort((a, b) => a.preco - b.preco)
    exibirOsFunkosNaTela(funkosOrdenados)
}