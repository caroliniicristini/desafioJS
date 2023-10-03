function notaProvas(matematica, portugues, informatica, conhecimentosGerais){

    let pesoMatematica = 2
    let pesoPadrao = 1;

    let notas = (matematica * pesoMatematica) + (portugues * pesoPadrao) + (informatica * pesoPadrao) + (conhecimentosGerais * pesoPadrao)
    let somaPesos = pesoMatematica + (3 * pesoPadrao)
    let mediaPonderada = notas / somaPesos

    console.log(mediaPonderada)
}

notaProvas(7, 5, 10, 8)