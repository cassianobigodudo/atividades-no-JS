//todo : Em jogos de tabuleiro do gênero RPG, um dos dados que pode ser utilizado é o dado D20. Esse dado possui 20 faces ou "lados" com valores de 1 a 20. Criar um sistema simples de jogo, onde no início é solicitado o número de jogadores e para cada jogador deve-se armazenar valores de quatro jogadas de um D20. A pontuação do jogador é definida excluindo o primeiro e o último valor, somando então os valores da segunda e terceira jogadas. Ao final mostrar a soma de cada jogador. (DESAFIO: validar os valores de 1 a 20, ou seja, caso um valor digitado não esteja entre dentro dos valores do dado, repetir a pergunta)

let dadoRolado, somaDados = 0, qtdRoladas = 4
let qtdJogadores

qtdJogadores = Number(prompt('Quantidade de jogadores:'))

for(i = 0; i < qtdJogadores; i++){

    for(j = 0; j < qtdRoladas; j++){

        do{

            dadoRolado = Number(prompt(`Qual foi a rolada do ${j+1}º dado? (D20)`))

        }while(isNaN(dadoRolado) || dadoRolado < 1 || dadoRolado > 20)

        if(j == 1 || j == 2){

           somaDados += dadoRolado
           console.log('Aqui eu somei')

        }

    }

    alert(`Jogador número ${i + 1}º, sua pontuação foi ${somaDados} `)

    somaDados = 0

}