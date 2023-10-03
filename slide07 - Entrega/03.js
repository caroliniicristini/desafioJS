function posicaoLetra(palavra, numero) {
 

    if (numero < 1 || numero > palavra.length) {
      return "Número fora dos limites da palavra.";
    }
    return palavra[numero];
  }
  
  const letraNaPosicao = posicaoLetra("algoritmos", 7);
  console.log(`${letraNaPosicao}`);
  
  