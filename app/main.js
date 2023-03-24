let livros = []
const endpointDaAPI = 'https://douglaswillianbasilio.github.io/casadocodigo/livros.json'
getBuscasLivrosDaAPI()

async function getBuscasLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}



