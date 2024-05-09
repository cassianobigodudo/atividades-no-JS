//todo: Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca caia em um alvo com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo. Faça um programa que pergunte a pontuação de cada arremesso e ao final mostre o resultado (soma dos pontos) e a classifição: 15 pontos (deus da peteca), de 14 a 10 (petequeiro profissa), de 9 a 5 (petequeiro de final de semana), de 4 a 1 (pseudo-petequeiro) e 0 pontos (nunca petequeiro).

let contador = 0, arremessos = 3
let somaPontos = 0, pontosRodada
let pontuacaoErrada = false

while(contador < arremessos){

    contador++
    pontosRodada = Number(prompt(`Quantos pontos você fez na ${contador}ª rodada?`))
    if(pontosRodada >= 0 && pontosRodada <= 5 ){

        somaPontos = somaPontos + pontosRodada

    }else{

        alert('Pontuação inválida')
        pontuacaoErrada = true
        break
    }

}
if(pontuacaoErrada == true){

    alert('Sua pontuação foi inválida e não tem como te definir como um petequeiro')

}else{

    switch(true){

        case somaPontos == 15:
            alert('Você é o deus da peteca!!! Pontos: '+ somaPontos)
            break
            
        case somaPontos < 15 && somaPontos >= 10:
            alert('Você é um petequeiro profissa!! Pontos: '+ somaPontos)
            break
            
        case somaPontos < 10 && somaPontos >= 5:
            alert('Você é um petequeiro de final de semana! Pontos: '+ somaPontos)
            break
            
        case somaPontos < 5 && somaPontos >= 1:
            alert('Você é um pseudo-petequeiro. Pontos: '+ somaPontos)
            break
            
        case somaPontos == 0:
            alert('Você é impetecador. Que vergonha... Pontos: '+ somaPontos)
            break
            
        default:
            alert('Pontuação inválida')
            break
        

    }

}