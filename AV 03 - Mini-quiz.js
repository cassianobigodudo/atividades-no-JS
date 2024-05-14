//todo: Desenvolver a lógica de perguntas / respostas / pontuação para um mini-quiz utilizando a estrutura condicional switch/case. O quiz contém 4 perguntas com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica. Realizar o cálculo da pontuação e mostrar ao final.

alert('Boas vindas ao mini-quiz de hoje! Reúna todas as suas habilidades que você aprendeu ao longo do curso para responder essas perguntas da maneira correta, usando toda a sua sapiência para adivinhar na base do chute as opções que o professor Lucas escolheria Kappa')


let pontos, somaPontos = 0
let opcaoPergunta
let danoCPU, perguntasQuiz = 4, contador = 0, numeroMaximo = 4, numeroMinimo = 0 

opcaoPergunta = prompt('1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?\n\nA) Van Helsing\nB) Castlevania\nC) The Vampire Diaries \nD) Blade: The Series').toUpperCase().trim()

switch (opcaoPergunta){

    case 'A':
        pontuacaoGanha = 2
        somaPontos = somaPontos + pontuacaoGanha
        break

    case 'B':
        pontuacaoGanha = 3
        somaPontos = somaPontos + pontuacaoGanha
        break

    case 'C':
        pontuacaoGanha = 2
        somaPontos = somaPontos + pontuacaoGanha
        break

    case 'D':
        pontuacaoGanha = 1
        somaPontos = somaPontos + pontuacaoGanha
        break

    default:
        alert('Não foi possível entender sua resposta, receba zero pontos')
        pontuacaoGanha = 0
        break


}

opcaoPergunta = prompt('2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\n\nA) Alice no País das Maravilhas\nB) O Hobbit\nC) A Fantástica Fábrica de Chocolates\nD) Coraline ').toUpperCase().trim()

switch (opcaoPergunta){

    case 'A':
        pontuacaoGanha = 4
        somaPontos = somaPontos + pontuacaoGanha
        break

    case 'B':
        pontuacaoGanha = 2
        somaPontos = somaPontos + pontuacaoGanha
        break

    case 'C':
        pontuacaoGanha = 4
        somaPontos = somaPontos + pontuacaoGanha
        break

    case 'D':
        pontuacaoGanha = 3
        somaPontos = somaPontos + pontuacaoGanha
        break

    default:
        alert('Não foi possível entender sua resposta, receba zero pontos')
        pontuacaoGanha = 0
        break


}

opcaoPergunta = prompt('Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\n\nA) The Legend of Zelda\nB) Kirby\nC) Metroid\nD) Super Mario Bros ').toUpperCase().trim()

switch (opcaoPergunta){

    case 'A':
        pontuacaoGanha = 3
        somaPontos = somaPontos + pontuacaoGanha
        break

    case 'B':
        pontuacaoGanha = 2
        somaPontos = somaPontos + pontuacaoGanha
        break

    case 'C':
        pontuacaoGanha = 2
        somaPontos = somaPontos + pontuacaoGanha
        break

    case 'D':
        pontuacaoGanha = 4
        somaPontos = somaPontos + pontuacaoGanha
        break

    default:
        alert('Não foi possível entender sua resposta, receba zero pontos')
        pontuacaoGanha = 0
        break


}

opcaoPergunta = prompt('4) Quais dos autores citados, representam melhor o gênero de livros de terror?\n\nA) Stephen King\nB) Edgar Allan Poe\nC) H.P. Lovecraft\nD) Mary Shelley ').toUpperCase().trim()

switch (opcaoPergunta){

    case 'A':
        pontuacaoGanha = 4
        somaPontos = somaPontos + pontuacaoGanha
        break

    case 'B':
        pontuacaoGanha = 2
        somaPontos = somaPontos + pontuacaoGanha
        break

    case 'C':
        pontuacaoGanha = 3
        somaPontos = somaPontos + pontuacaoGanha
        break

    case 'D':
        pontuacaoGanha = 4
        somaPontos = somaPontos + pontuacaoGanha
        break

    default:
        alert('Não foi possível entender sua resposta, receba zero pontos')
        pontuacaoGanha = 0
        break


}

alert('Pontuação total: '+ somaPontos)

if(somaPontos === 15){

    alert('Meus parabéns!!')

}

alert('Espero que você tenha feito uma boa pontuação, porque SURPRESA!! Isso na verdade era um jogo de luta disfarçado de um mini-quiz dentro de uma avaliação!\n\nVocê lutará contra uma CPU que lhe dará 4 ataques, e se a sua vida cair pra baixo de zero, você é um perdedor, então reze para o RNGesus! ')

alert ('HP Atual: '+ somaPontos)

while (contador < perguntasQuiz && somaPontos > 0){

    contador++
    danoCPU = Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo
    somaPontos = somaPontos - danoCPU
    alert(`${contador}º Ataque inimigo chegando! Dano causado: ${danoCPU.toFixed(2)}`)
    alert(`HP: ${somaPontos.toFixed(2)}`)

}

switch (true){

    case somaPontos <= 0:

        alert('Você morreu, és um tolasso')
        break

    case somaPontos <= 2:

        alert('Você se manteve determinado a ficar vivo com seu último suspiro')
        break

    
    case somaPontos <= 4:

        alert('Quase morreu, foi por pouco viu?')
        break

    case somaPontos <= 8:

        alert('Ataques fortes mas você se manteve de pé!')
        break

    case somaPontos <= 12:

        alert('Você é duro na queda heim? nice demais!')
        break

    case somaPontos <= 15:

        alert('Simplesmente um deus dos jogos!')
        break
    
    default:

        alert('Não sei como, mas você conseguiu quebrar o jogo')
    


}

