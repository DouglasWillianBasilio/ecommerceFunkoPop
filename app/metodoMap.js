function aplicarDesconto(funkos) {
    const desconto = 0.0
    funkosComDesconto = funkos.map(funko => {
        return {...funko, preco: funko.preco - (funko.preco * desconto)}
    })

    return funkosComDesconto
}