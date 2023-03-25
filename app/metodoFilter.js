const botoes = document.querySelectorAll ('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarFunkos))
function filtrarFunkos(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let funkosFiltrados = categoria == 'total' ? funkos.filter(funko => funko.quantidade > 0) :funkos.filter(funko => funko.categoria == categoria)
    exibirOsFunkosNaTela(funkosFiltrados)
    if(categoria == 'total') {
        exibirValorTotalDosFunkosDisponiveisNaTela()
    }
}

function exibirValorTotalDosFunkosDisponiveisNaTela() {
    elementoComValorTotalDeFunkosDisponiveis.innerHTML = `
    <div class="funkos__disponiveis">
      <p>Todos os Funkos disponíveis por R$ <span id="valor">299,00</span></p>
    </div>
    `
}