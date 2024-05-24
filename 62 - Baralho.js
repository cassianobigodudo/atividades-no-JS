//todo: Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho).


let nomePlayerUm, nomePlayerDois
let somaCartasPUm = 0, somaCartasPDois = 0
let cartaJogada

nomePlayerUm = prompt(`Digite o seu nome, jogador número um`)
nomePlayerDois = prompt(`Digite o seu nome, jogador número dois`)

for(i=0; i<5; i++){

    do{

        cartaJogada = Math.floor(Number(prompt(`${nomePlayerUm}, Digite o valor da sua ${i+1} carta (de 1 a 13)`)))

    }while(isNaN(cartaJogada) || cartaJogada < 1 || cartaJogada > 13)

        somaCartasPUm += cartaJogada

    do{

        cartaJogada = Math.floor(Number(prompt((`${nomePlayerDois}, Digite o valor da sua ${i+1} carta (de 1 a 13)`))))

    }while(isNaN(cartaJogada) || cartaJogada < 1 || cartaJogada > 13)

        somaCartasPDois += cartaJogada

}

switch(true){

    case somaCartasPUm > somaCartasPDois:

        alert(`${nomePlayerUm} WINS!\n\nPontuação de ${nomePlayerUm}: ${somaCartasPUm}\nPontuação de ${nomePlayerDois}: ${somaCartasPDois}`)
        break

    case somaCartasPUm < somaCartasPDois:

        alert(`${nomePlayerDois} WINS!\n\nPontuação de ${nomePlayerUm}: ${somaCartasPUm}\nPontuação de ${nomePlayerDois}: ${somaCartasPDois}`)
        break

    case somaCartasPUm == somaCartasPDois:

        alert(`EMPATE!!!\n\nPontuação de ${nomePlayerUm}: ${somaCartasPUm}\nPontuação de ${nomePlayerDois}: ${somaCartasPDois}`)
        break

    default:
        alert(`ERRO 404`)


}