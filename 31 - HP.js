//todo Em um jogo o seu personagem tem 100 de HP (vida). Criar um programa onde o usuário digite o valor de um dano (ataque sofrido pelo personagem). Caso a vida do personagem chegue a zero ou negativo, mostrar na tela "Game Over". Se a vida ficar de 1 a 20, mostrar "Dano crítico, quase sem vida", se a vida ficar de 21 a 50, mostrar "Dano moderado, vida estável" e se a vida ficar entre 51 a 100, mostrar "Dano leve, vida boa!".

let vidaPersonagem = 100, danoInimigo

do{

    switch(true){

        case vidaPersonagem >= 100:

            alert('O herói tá suavão! HP: ' + vidaPersonagem)
            break

        case vidaPersonagem >= 80:
            alert('O herói tá belezinha ainda! HP: ' + vidaPersonagem)
            break
        
        case vidaPersonagem >= 50:
            alert('O herói tá machucado! HP: ' + vidaPersonagem)
            break

        case vidaPersonagem >= 20:
            alert('O herói ta em estado crítico! HP: ' + vidaPersonagem)
            break

        case vidaPersonagem >= 1:
            alert('O herói ta ferrado! HP: ' + vidaPersonagem)
            break

        default:
            alert('Vida não identificada? (erro?)')
            break
    }

    danoInimigo = Number(prompt('Quantidade do dano do mago de fogo:'))

    switch(true){

        case danoInimigo >= 100:
            vidaPersonagem = vidaPersonagem - danoInimigo
            alert('INSTA KILL!!!')
            break

        case danoInimigo >= 80:
            vidaPersonagem = vidaPersonagem - danoInimigo
            alert('DANO CRÍTICO!!')
            break
        
        case danoInimigo >= 50:
            vidaPersonagem = vidaPersonagem - danoInimigo
            alert('Rolagem média, o dano foi moderado, cuidado')
            break

        case danoInimigo >= 1:
            vidaPersonagem = vidaPersonagem - danoInimigo
            alert('Dano fraco, tá bem de boa')
            break

        case danoInimigo == 0:
            vidaPersonagem = vidaPersonagem - danoInimigo
            alert('Dano zero!')
            break

        case danoInimigo <= 0:
            vidaPersonagem = vidaPersonagem - danoInimigo
            alert('Dano negativo? ai é foda')
            break

        default:
            alert('Dano não validado')
            break
            
    }

} while (vidaPersonagem > 0)

alert('O Herói foi de comes e bebes...')