//todo: Em uma máquina de cassino, ao jogar o jogador sempre ganha. Em cada 'partida' o jogador pode formar sequências de frutas que rendem valores em dinheiro. Criar um programa que pergunte ao jogador as três frutas sorteadas e mostre o valor ganho de acordo com a tabela a seguir.

//todo    CEREJA - CEREJA - CEREJA -> R$100
//todo    LARANJA - LARANJA - LARANJA -> R$80
//todo    CEREJA - LARANJA - CEREJA -> R$50
//todo    LARANJA - CEREJA - LARANJA -> R$25

let frutaUm, frutaDois, frutaTres

frutaUm = prompt('Digite o valor da primeira fruta sorteada (Cereja ou Laranja)').toUpperCase().trim()

frutaDois = prompt('Digite o valor da segunda fruta sorteada (Cereja ou Laranja)').toUpperCase().trim()

frutaTres = prompt('Digite o valor da terceira fruta sorteada (Cereja ou Laranja)').toUpperCase().trim()

switch (true){

    case frutaUm === 'CEREJA' && frutaDois === 'CEREJA' && frutaTres === 'CEREJA':
        
        alert ('Você ganhou R$100,00')
        break

    case frutaUm === 'LARANJA' && frutaDois === 'LARANJA' && frutaTres === 'LARANJA':
        
        alert('Você ganhou R$80,00')
        break

    case frutaUm === 'CEREJA' && frutaDois === 'LARANJA' && frutaTres === 'CEREJA':
        
        alert('Você ganhou R$50,00')
        break

    case frutaUm === 'LARANJA' && frutaDois === 'CEREJA' && frutaTres === 'LARANJA':
        
        alert('Você ganhou R$25,00')
        break

    default:
        alert('Você não ganhou nada :c')
        
}