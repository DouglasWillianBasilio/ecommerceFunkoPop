let funkos = []
const endpointDaAPI = 'https://douglaswillianbasilio.github.io/casadocodigo/livros.json'
getBuscasFunkoDaAPI()

async function getBuscasFunkoDaAPI() {
    const res = await fetch(endpointDaAPI)
    funkos = await res.json()
    let funkoComDesconto = aplicarDesconto(funkos)
    exibirOsFunkosNaTela(funkoComDesconto)
}



