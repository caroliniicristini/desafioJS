function contaVogais(palavra) {
  const vogais = [];

  for (let i = 0; i < palavra.length; i++) {

    const letra = palavra[i].toLowerCase()

    if ('aeiou'.includes(letra)) {
      vogais.push(letra);
    }
  }

  return vogais.length;
}

const meuNome = "Carol";
const vogaisMeuNome = contaVogais(meuNome);
console.log(vogaisMeuNome);
