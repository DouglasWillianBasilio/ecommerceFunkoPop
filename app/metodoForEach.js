const elementoParaInserirFunkos = document.getElementById('funkos')
const elementoComValorTotalDeFunkosDisponiveis = document.getElementById('valor_total_funkos_disponiveis')

function exibirOsFunkosNaTela(listaDeFunkos){
    elementoComValorTotalDeFunkosDisponiveis.innerHTML = ""
    elementoParaInserirFunkos.innerHTML = ''
    listaDeFunkos.forEach(funko => {
        elementoParaInserirFunkos.innerHTML += `
        <div class="funko">
      <img class="funko__imagens" src="${funko.imagem}" alt="${funko.alt}" />
      <h2 class="funko__titulo">
        ${funko.titulo}
      </h2>
      <p class="funko__descricao">${funko.autor}</p>
      <p class="funko__preco" id="preco">${funko.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${funko.categoria}</span>
      </div>
    </div>
        `
    })}

    