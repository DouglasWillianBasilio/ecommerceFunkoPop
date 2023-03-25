const botoes = document.querySelectorAll ('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarFunkos))
function filtrarFunkos(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let funkosFiltrados = categoria == 'total' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirOsFunkosNaTela(funkosFiltrados)
    if(categoria == 'total') {
        const valorTotal = calcularValorTotalDeFunkosDisponiveis(funkosFiltrados)
        exibirValorTotalDosFunkosDisponiveisNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return funkos.filter(funko => funko.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return funkos.filter(funko => funko.quantidade > 0)
}

function exibirValorTotalDosFunkosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeFunkosDisponiveis.innerHTML = `<div class="funkos__disponiveis">
    <p>Todos os Funks disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
  `
}