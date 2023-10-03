const carros = [
{
    modelo: "Ka",
    marca: "Ford",
    ano: "2000",
    cor: "Branco",
    completo: false,
    acessorios: ['Vidro Elétrico'],
    preco: 6799.33
},
{
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: false,
    acessorios: ['Trava'],
    preco: 12199.13
},
{
    modelo: "Palio",
    marca: "Fiat",
    ano: "1995",
    cor: "Verde",
    completo: false,
    acessorios: [],
    preco: 11099.1
},
{
    modelo: "Monza",
    marca: "Chevrolet",
    ano: "1993",
    cor: "Vinho",
    completo: false,
    acessorios: [],
    preco: 14578.25
},
{
    modelo: "Saveiro",
    marca: "VW",
    ano: "2013",
    cor: "Prata",
    completo: false,
    acessorios: [],
    preco: 28399.13
},
{
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 14350.45
},
{
    modelo: "Gol",
    marca: "VW",
    ano: "2013",
    cor: "Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 22109.21
},
{
    modelo: "Montana",
    marca: "Chevrolet",
    ano: "2011",
    cor: "Azul",
    completo: false,
    acessorios: [],
    preco: 15999.13
},
{
    modelo: "Stilo",
    marca: "Fiat",
    ano: "2015",
    cor: "Preto",
    completo: false,
    acessorios: [],
    preco: 17251.36
}
]


  function listaEstoque(carro){

    return carro.length
  }

  function totalEstoque(carros){

    let preco = 0;

    for(let i = 0; i < carros.length; i++){

        preco += carros[i].preco;

    }
     return preco
  }

function veiculoPorMarca(carros, marcaBuscada){
     
    let carroFiltrado = [];


    //foreach percorre cada elemento do array
  carros.forEach(carro => {
    if(carro.marca === marcaBuscada) {
        carroFiltrado.push(carro)
  }
});
return carroFiltrado
}


function temAcessorio(carros) {

    const acessorio = [];

    carros.forEach(carro => {
        if(carro.acessorios.length > 0){
            //push adiciona
           acessorio.push(carro)
        }
    })
    return acessorio

}

function veiculoCompleto(carros){

    for(let i = 0; i < carros.length; i++){
        //filter monta um novo array 
        return carros.filter((carroCompleto) => carroCompleto.completo === true)
    }
}


function adicionarCarro(carros, novoCarro){

    carros.push(novoCarro)
}

function removendoCarro(carros, indice){

        carros.splice(indice, 1)

}
    

function listNewCar(carros){

    const dataAtual = new Date().getFullYear()

        return carros.filter(carro => {

            const anoCarro = parseInt(carro.ano)
            return dataAtual - anoCarro < 10
        })
  
}


function donos(carros, indice){ 

    const pessoa = {
        nome: "Carolini",
        telefone: 48999327602
    }

    carros[indice].donos = { 
    
    nome : pessoa.nome,
    telefone : pessoa.telefone
   }

   return carros
}

const indiceCarro = 1;

const carrosAtualizados = donos(carros, indiceCarro);
console.log(carrosAtualizados);