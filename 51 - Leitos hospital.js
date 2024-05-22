//todo: Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas.  Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos). Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito. (DESAFIO: Criar condição para não aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres).

let leitoTotalVagas = 130, vagasLeitoDisponivel, operandoCapacidadePorcentagem = 50, leitosOcupados = 25
let numeroPessoasEntram, numeroPessoasSaem, limiteAtingido = false

// 40 vagas
vagasLeitoDisponivel = (leitoTotalVagas * operandoCapacidadePorcentagem / 100) - leitosOcupados

do{

numeroPessoasEntram = Number(prompt('Quantidade de pessoas que entram'))

numeroPessoasSaem = Number(prompt('Quantidade de pessoas que saem (números negativos)'))

vagasLeitoDisponivel = (vagasLeitoDisponivel - numeroPessoasEntram) - numeroPessoasSaem

if(vagasLeitoDisponivel > 40){

    alert('Não é possível abrir novas vagas')
    limiteAtingido = true
    break


}else if(vagasLeitoDisponivel < 0){

    vagasLeitoDisponivel = 0 - vagasLeitoDisponivel
    alert(`Não é possível pois ultrapassa a capacidade em ${vagasLeitoDisponivel}`)
    limiteAtingido = true
    break

}else if (vagasLeitoDisponivel == NaN){

    alert('Valores inválidos')

}else{

    alert(`Leitos disponíveis: `+ vagasLeitoDisponivel)

}

}while(limiteAtingido == false)
