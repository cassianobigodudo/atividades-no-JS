//todo Criar um programa no qual o usuário digite o motivo da sua saída em uma empresa e o valor do seus FGTS. Para motivo "Justa causa" o valor a receber é o valor do FGTS somado a uma multa de R$4.000,00. Para motivo "Sem justa causa" o valor a receber é o valor do FGTS com desconto de 15%. Ao final mostrar o valor a receber.

let motivoSaida, multaJustaCausa = 4000, valorFGTS, descontoPorcentagem = 15, valorDescontado, valorFinal

motivoSaida = prompt('Qual o motivo da saída?').toUpperCase().trim()
valorFGTS = Number(prompt('Valor do FGTS:'))

switch(motivoSaida){

    case 'JUSTA CAUSA':

        valorFinal = valorFGTS - multaJustaCausa
        alert(`Justa causa recebe uma multa de R$${multaJustaCausa}, ficando o valor final de R$${valorFinal}`)
        break

    case 'SEM JUSTA CAUSA':

        valorDescontado = valorFGTS * descontoPorcentagem
        valorFinal = valorFGTS + valorDescontado


}