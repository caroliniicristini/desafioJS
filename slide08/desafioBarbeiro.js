const barbearia = {
    cortes: [

      { id: 1, tipo: "Militar", valor: 20.0 }, 
      { id: 2, tipo: "Samurai", valor: 35.0 }, 
      { id: 3, tipo: "Pompadour", valor: 20 }, 
      { id: 4, tipo: "Moicano", valor: 0 }, 
      { id: 5, tipo: "Razor part", valor: 0 }, 

    ],
  
    barbas: [
      { id: 1, tipo: "Capitão Jack", valor: 20.0 },
      { id: 2, tipo: "Van Dyke", valor: 20.0 },
      { id: 3, tipo: "Barba Média", valor: 20.0 },
      { id: 4, tipo: "Barba Baixa", valor: 20.0 },
      { id: 5, tipo: "Barba Zero", valor: 15.0 },
    ],
    estaAberto: false, 
  };
  
  
  function buscaCortePorId(id) { 

    const cortes = barbearia.cortes
 
    for(let i = 0; i < cortes.length; i++) { 
        if(cortes[i].id == id) { 
            return cortes[i]; 
    }  
   
    } 
    return 'Corte não encontrado'
  }
// console.log(buscaCortePorId(1));
// console.log(buscaCortePorId(6)); 
  
  function buscaBarbaPorId(id) {
   const barbas = barbearia.barbas

   for(let i = 0; i < barbas.length; i++) {
    if(barbas[i].id === id) {
        return barbas[i]
    }
   }
   return 'Barba ñ encontrada'
  }

// console.log(buscaBarbaPorId(1));
// console.log(buscaBarbaPorId(7)); 
  
  function verificaStatusBarbearia() {
    if(barbearia.estaAberto){
        return 'Estamos aberto'
    } else {
        return 'Estamos fechado'
    }
  }
// console.log(verificaStatusBarbearia());

  function retornaTodosCortes() {
    return barbearia.cortes
  }
// console.log(retornaTodosCortes());
  
  function retornaTodasBarbas() {
    return barbearia.barbas
  }
// console.log(retornaTodasBarbas());

  function criaPedido(nomeCliente, corteId, barbaId) {
     const corte = buscaCortePorId(corteId)
     const barba = buscaBarbaPorId(barbaId)

     if(corte === 'Corte não encontrado' || barba === 'Barba não encontrado'){
        return 'Valor inválido'
     }

     const pedido = {
        nome: nomeCliente,
        pedidoCorte: corte.tipo,
        pedidoCortePreco: corte.preco,
        pedidoBarba: barba.tipo,
        pedidoBarbaPreco: barba.preco
     }
     return pedido
  } 
// console.log(criaPedido('Carol', 1, 1));

  function calculaTotal(pedido){
  
    return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco
  }
  
  function atualizaPedido(lista, id, valor, tipo) {
    for(let i = 0; i < lista.length; i++) {
        if(lista[i].id == id) {
            if(valor !== undefined || valor !== null) {
                lista[i].valor = valor
            } 
            if(tipo !== undefined || tipo !== null) {
                lista[i].tipo = tipo
            }
       return 'Item atualizado'
    }
  }
 return "Item nao encontrado"
}
console.log(atualizaPedido(barbearia.cortes, 5, 70, 'GOKU'));
console.log(barbearia.cortes);