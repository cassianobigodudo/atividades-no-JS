//todo: Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto). Em seguida deve ser perguntado qual número imagina-se que seja o número secreto. A cada rodada, deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior". Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas.

let cont = 0, numeroMaximo = 100, numeroMinimo = 40, numeroDigitado
let numeroMagico = Math.floor((Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo))

console.log(numeroMagico)
do{

    if(cont != 0){

        if (numeroDigitado > numeroMagico){

            alert('O número mágico é menor que o número digitado')

        } else{

            alert('O número mágico é maior que o número digitado')
        }


    }

    do{

        numeroDigitado = Number(prompt('Digite um número e adivinhe o número mágico'))

    } while (isNaN(numeroDigitado))


    cont++

}while (numeroDigitado != numeroMagico) 

alert(`Você adivinhou o número mágico (${numeroMagico}) em ${cont} tentativas!`)