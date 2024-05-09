//todo Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida. Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência". Do contrário, ao final mostrar uma mensagem "Você terminou a sequência corretamente". (PESQUISA: comando pare)

let numeroAtual = 10, numeroFinal = 0, numeroPerguntar

    alert('Digite uma sequência de 10 a 1 sem errar a sequencia ou eu me mato')

while(numeroAtual > numeroFinal){

    numeroPerguntar = Number(prompt(`Digite na sequência certa`))

    if(numeroPerguntar != numeroAtual){

        alert('Você errou a sequência. morri')
        break

    }else{

        numeroAtual--
        
    }

}

if(numeroAtual == numeroFinal){
    alert('Você acabou a sequência corretamente!')
}