let escola = {
    nome: 'Escola Novo Estudo',
    status: true,
    nivel: 'fundamental',
    nota: 3
  }


// function alterarStatus(escola){
//      if(escola.status === true){
//         escola.status = false
//     } else {
//         escola.status = true
//     }
// }

// alterarStatus(escola);
// console.log(escola ); 

// function alteraNivel(escola, nivel){

//     const niveisPermitidos = ['Primário', 'Fundamental', 'Ensino Médio'];
//     const nivelAtualizado = nivel.charAt(0).toUpperCase() + nivel.slice(1).toLowerCase();

//  if(niveisPermitidos.includes(nivelAtualizado)){
//     escola.nivel = nivelAtualizado
//  } else { 
//     return `Valor inválido`
//  }
//  return escola
// }

// console.log(alteraNivel(escola, 'Fundamental'));

// function alteraNome(escola, nome) {
//     // Verifica se o nome é uma string
//     if (typeof nome !== 'string') {
//         return 'Formato inválido';
//     } else {
//         escola.nome = nome;

//         return escola;
     
//     }
//   }
  
// console.log(alteraNome(escola, 12)); 

// function classificaEscola(escola, nota){
//     if(typeof nota === 'number' && nota > 0 && nota <= 5) {
//         escola.nota = nota;
//         return escola
//     } else{
//         return `Valor inválido`
//     }
// }
// console.log(classificaEscola(escola, 0)); 


// function verificaStatus(escola){

//     if(escola.status){
//         return `Escola aberta`
//     } else {
//         return `Escola fechada`
//     }

// }
// console.log(verificaStatus(escola))


function verificaQualidadeDeEnsino(escola){

    if(escola.nota === 1 || escola.nota === 2){
        return `Não é uma boa escola`
    } else if(escola.nota === 3 || escola.nota === 4){
        return `Essa é uma boa escola`
    } else if(escola.nota === 5){
        return `É uma ótima escola`
    }

}

console.log(verificaQualidadeDeEnsino(escola))