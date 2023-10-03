 const pessoa = {
    nome: 'Carol',
    anoNascimento: 1999,
    cidade: 'Florianópolis'
 }


 function criarPessoa(nome, anoNascimento, cidade) {
    return {
        nome,
        anoNascimento,
        cidade 
      };
 }

// console.log(criarPessoa("Joao", 1998, "palhoça"))

function apresentar(pessoa){
    const dataAtual = new Date().getFullYear()

    const idade = dataAtual - pessoa.anoNascimento

    return `${pessoa.nome} possui ${idade} anos de idade e atualemnte está morando em ${pessoa.cidade}`
}

// const newPessoa = criarPessoa('Antonio', 1997, 'Florianópolis');
// console.log(apresentar(newPessoa));