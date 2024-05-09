//todo Crie um programa que leia um número inteiro entre 1 e 7 e mostre na tela o dia da semana correspondente a este número. Domingo corresponde ao número 1 e assim para os outros dias da semana até sábado, que corresponde ao número 7. Caso seja digitado um número que não seja de 1 a 7, mostrar uma mensagem que o número é inválido.

let diaSemana

diaSemana = Number(prompt('Digite o dia da semana de hoje'))

switch(diaSemana){

    case 1:
        alert('Hoje é domingo!')
        break
    
    case 2:
        alert('Hoje é segunda!')
        break

    case 3:
        alert('Hoje é terça!')
        break

    case 4:
        alert('Hoje é quarta!')
        break

    case 5:
        alert('Hoje é quinta!')
        break

    case 6:
        alert('Hoje é sexta!')
        break

    case 7:
        alert('Hoje é sábado!')
        break

    default:
        alert('Dia inválido!')
        break
    

}