const agenda = {
    nome : '',
    contatos : [],
}
const pessoa = {
    nome: 'Antonio',
    telefone: 48996107366
}

// function adicionarContato(pessoa){

//   agenda.contatos.push(pessoa)
// }

// adicionarContato(pessoa);

function listarContatos(){
    for(const contato of agenda.contatos) {
    console.log(`Nome: ${contato.nome} Telefone : ${contato.telefone}`);
  }
}

// listarContatos()

// function pesquisarContato(nome){

//   for(const contato of agenda.contatos){
//     if(contato.nome === nome){
//         return `Nome: ${contato.nome}`
//   }
// }
// return `Contato nao encontrado`
// }

// const resultadoPesquisa = pesquisarContato('lo');
// console.log(resultadoPesquisa);  







