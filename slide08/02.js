const carro = {
    placa : "ABC123", 
    classes: ["sedan", "bmw"],
    luxo : true,
    potencia: 200,
    estacionado: true
}

function obterPlaca(){
    console.log(carro.placa)
}

function verificarClasses(){
   if(carro.classes.length === 1){
    return carro.classes[0];
   } else{
    return carro.classes
   }
}

function potenciaReal(){

    if(carro.luxo === true){

        return Math.pow(carro.potencia, 2)

    }
   console.log(carro.potencia)
}

function adicionarNovaClasse(string){

    const classePerminitida = ['Sedan', 'hatchback', 'suv', 'crossover', 'cupê']

        if(carro.classes.length >= 3){
            return "Este carro não pode ter mais classes"
        }
        if(!classePerminitida.includes(string.toLowerCase())){
            return "Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupÊ."
        }

        if(carro.classes.includes(string.toLowerCase()) ){
            return `O carro já possui a classe: ${string.toLowerCase()}`
        }

    carro.classes.push(string);
    return `Classe '${string}' adicionada com sucesso`

}
function naoMaisLuxo(){

    if(!carro.estacionado){
        return `O carro ${carro.placa} não está estacionado`
    }
    if(!carro.luxo){
        return `O carro ${carro.placa} não é luxuoso`
    }

    carro.luxo = false;
    return `O carro ${carro.placa} não é mais considerado um carro de luxo;`
}

