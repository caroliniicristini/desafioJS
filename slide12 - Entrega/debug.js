

const produtos = []

function insereProduto(produto){
   
  produtos.push(produto);

    return produto 
}

insereProduto(
    {
        preco: 100,
        quantidade: 10, 
        nome: "Soja 25kg"
    }
)
insereProduto(
    {
        preco: 3100,
        quantidade: 120, 
        nome: "Soja 235kg"
    }
)
insereProduto(
    {
        preco: 3100,
        quantidade: 140, 
        nome: "Soja 255kg"
    }
)


// function criaProduto(preco, quantidade, nome){
//     let produto = {
//         preco: preco,
//         quantidade: quantidade,
//         nome: nome
//     }

//     return produto
// }

// console.log(criaProduto(200, 150, "Feijão 125kg"))


// Função⁠

// function renderizaProdutos(todosProdutos){
//     for (let i = 0; i < todosProdutos.length; i++){

//         console.log(todosProdutos[i].preco)
//     }
// }

// // Chamada da função


// renderizaProdutos(produtos)


// Função⁠

// Função⁠

// let listServico = []

// function cadastraServicos(servico){
//     console.log(listServico.push(servico))
// }

// // Chamada da função

// cadastraServicos({servico: "Pulverização", tipo: "Gafanhotos", valor: 50})

// Função⁠
function calculaValorServico(clienteServicos){
    
    let total = 0;

    for(let i = 0; i < clienteServicos.servico.length; i++){
        
        let valorServico = clienteServicos.servico[i].preco * clienteServicos.servico[i].quantidade
        total += valorServico
    }
    
    console.log(total)
}

// Chamada da função
calculaValorServico({cliente: "Rafael", servico:[
    pulverizacao = {
       preco: 50,
       quantidade: 10
    },
    capina = {
        preco: 5,
        quantidade: 10
    },
    aragem = {
        preco: 200,
        quantidade: 10
    }

]})
