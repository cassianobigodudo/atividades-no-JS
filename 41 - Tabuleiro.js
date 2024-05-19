//todo: Em um jogo de tabuleiro com combinação de moeda e dado, temos possibilidades de cara ou coroa (moeda) e números de 1 a 6 (dado). Criar um programa que pergunte ao usuário qual foi o resultado da moeda e do dado, em seguida determinar o que acontece na rodada. Caso o resultado da moeda tenha sido cara, o jogador perde a vez, independente do dado. Mostrar mensagem de "Você perdeu sua vez!". Caso a moeda tenha sido coroa, o jogador pulará o número de casas no tabuleiro que sair na jogada do dado. Mostrar mensagens "Avance X casas no tabuleiro!", sendo X o número que saiu no dado.

let resultadoDado, resultadoMoeda

resultadoDado = Number(prompt(`Resultado do dado (1 a 6):`))
resultadoMoeda = prompt(`Resultado da moeda (cara ou coroa):`).toUpperCase().trim()

switch (resultadoMoeda){

    case 'CARA' :

        alert (`Você perdeu a vez!`)
        break

    case 'COROA':
        switch (resultadoDado){

            case 1:

                alert('Avance uma casa no tabuleiro')
                break

            case 2:

                alert('Avance duas casas no tabuleiro')
                break

            case 3:

                alert('Avance três casas no tabuleiro')
                break

            case 4:

                alert('Avance quatro casas no tabuleiro')
                break

            case 5:

                alert('Avance cinco casas no tabuleiro')
                break

            case 6:

                alert('Avance seis casas no tabuleiro')
                break

            default:
                alert('Rodada inválida (dado)')
        }
        break
        
    default:
        alert('Rodada inválida (moeda)')

}