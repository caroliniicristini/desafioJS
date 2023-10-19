const alunoCurso = {
    nome: "João",
    idade: 31,
    curso: "FullStack",
    instituicao: "Maclean’s Curso",
    materias: ["Html", "Css", "JavaScript", "Python"],
    situacaoMatricula: true,
};

function getTheCurse(aluno){
    alert(`${aluno.curso}`)
}

function getTheSubject(aluno){
    alert(`${aluno.materias}`)
}

function registrationStatus(aluno){
    if(aluno.situacaoMatricula === true){
       alert('Ativo')
    } else {
        return `Inativo`
    }
}

function generateStudentCard(aluno){
    const cardInformation = {
        nome : aluno.nome,
        idade : aluno.idade,
        instituicao :  aluno.instituicao,
        materias : aluno.materias,
        situacaoMatricula: aluno.situacaoMatricula
    } 

    return cardInformation;
}

function opcoes(){

    const option = parseInt(prompt("Digite o número da opção: \n 1: Curso \n 2: Materias \n 3: Situação da Matricula \n 4: Gerar Carteira"));
    let cardInfo;

    switch(option){
        case 1: getTheCurse(alunoCurso); break;
        case 2: getTheSubject(alunoCurso); break;
        case 3: registrationStatus(alunoCurso); break;
        case 4: cardInfo = generateStudentCard(alunoCurso);  alert(JSON.stringify(cardInfo, null, 2)); break;
          break;
        default: alert('Opção inválida');
    }
}

opcoes()

