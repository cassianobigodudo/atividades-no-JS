//todo: Em uma competição de dardos, os competidores se classificam para a próxima fase caso consigam 75% ou mais da pontuação total, que é 60 pontos. Caso consiga 50% ou mais, porém abaixo de 75%, vai para a repescagem. Menos que isso, é eliminado. Cada arremesso pode marcar de 0 a 10 pontos, dependendo da precisão. Criar um programa para armazenar a pontuação dos 6 arremessos de um competidor e ao final mostrar uma mensagem com sua pontuação, seu desempenho (percentual) e se ele está classificado, se foi para a repescagem ou se está desclassificado.

let somaDardos = 0, percentualRepescagem = 50, percentualClassificado = 75, pontuacaoMaxima = 60, percentualJogador
let dardoJogado

for(i=0; i < 6; i++){

    do{

        dardoJogado = Math.floor(Number(prompt(`Digite o valor do arremeso do ${i+1}º dardo (0 a 10 pontos)`)))

    }while(isNaN(dardoJogado) || dardoJogado < 0 || dardoJogado > 10)

        somaDardos += dardoJogado

}

percentualJogador = somaDardos * 100 / pontuacaoMaxima

alert(`Sua pontuação foi ${somaDardos} pontos de 60 pontos!\n\nSeu percentual de pontos é ${percentualJogador}%`)

switch(true){

    case percentualJogador >= percentualClassificado:

        alert(`Você foi classificado!`)
        break
    
    case percentualJogador >= percentualRepescagem:

        alert(`Você foi para a repescagem`)
        break

    case percentualJogador < percentualRepescagem:

        alert('Você foi desclassificado')
        break

    default:

        alert('ERROR 404')

}
