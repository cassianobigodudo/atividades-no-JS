//todo: Você é um ciclista profissional e pretende participar da competição "Volta à Ilha de Bike", revezamento em equipes, com equipes de 4 integrantes. O percurso tem um total de 140km, sendo dividido em 4 partes: Trecho 1 Av. Beira-Mar até Cachoeira do Bom Jesus (30km), Trecho 2 Cachoeira do Bom Jesus até Lagoa da Conceição (45km), Trecho 3 Lagoa da Conceição até Pântano do Sul (30km), Trecho 4 Pântano do Sul até Av. Beira-Mar (35km). Criar um programa que recebe o nome da equipe, em seguida o nome de cada um dos 4 integrantes e o tempo em horas que gastou pedalando o seu trecho. Ao final mostrar a velocidade média de cada trecho e a velocidade média geral (total dos 4 trechos) com duas casas após a vírgula. Se a velocidade média geral ficar abaixo de 15km/h mostrar uma mensagem "Desempenho pode melhorar bastante!", caso a velocidade média fique de 15 a 18km/h mostrar uma mensagem "Desempenho bom, mas ainda pode melhorar!" e se a média ficar acima de 18km/h mostrar uma mensagem "Desempenho excelente. Parabéns!"

let nomeEquipe, integranteUm, integranteDois, integranteTres, integranteQuatro, tempoTrechoUm, tempoTrechoDois, tempoTrechoTres, tempoTrechoQuatro, velocidadeMediaTrechoUm, velocidadeMediaTrechoDois, velocidadeMediaTrechoTres, velocidadeMediaTrechoQuatro, velocidadeMediaTotal

nomeEquipe = prompt(`Digite o nome da sua equipe`)

integranteUm = prompt(`Digite o nome do primeiro integrante da equipe`)
integranteDois = prompt(`Digite o nome do segundo integrante da equipe`)
integranteTres = prompt(`Digite o nome do terceiro integrante da equipe`)
integranteQuatro = prompt(`Digite o nome do quatro integrante da equipe`)

tempoTrechoUm = Number(prompt(`Digite o tempo percorrido no primeiro trecho`))
tempoTrechoDois = Number(prompt(`Digite o tempo percorrido no segundo trecho`))
tempoTrechoTres = Number(prompt(`Digite o tempo percorrido no terceiro trecho`))
tempoTrechoQuatro = Number(prompt(`Digite o tempo percorrido no quatro trecho`))

velocidadeMediaTrechoUm = 30 / tempoTrechoUm
velocidadeMediaTrechoDois = 45 / tempoTrechoDois
velocidadeMediaTrechoTres = 30 / tempoTrechoTres
velocidadeMediaTrechoQuatro = 35 / tempoTrechoQuatro

velocidadeMediaTotal = 135/ (tempoTrechoUm + tempoTrechoDois + tempoTrechoTres + tempoTrechoQuatro)

alert(`-- TIME ${nomeEquipe} --\n\nAv. Beira-Mar até Cachoeira do Bom Jesus : ${velocidadeMediaTrechoUm}Km/h\nAv. Cachoeira do Bom Jesus até Lagoa da Conceição : ${velocidadeMediaTrechoUm}Km/h\nAv. Lagoa da Conceição até Pântano do Sul : ${velocidadeMediaTrechoUm}Km/h\nAv. Pântano do Sul até Av. Beira-Mar : ${velocidadeMediaTrechoUm}Km/h\n\nVelocidade média percorrida em todo o percurso: ${velocidadeMediaTotal}Km/h`)

switch(true){

    case velocidadeMediaTotal < 15:
        alert(`Desempenho pode melhorar bastante`)
        break

    case velocidadeMediaTotal >=15 && velocidadeMediaTotal < 18:
        alert(`Desempenho bom mas pode melhorar`)
        break

    case velocidadeMediaTotal >= 18:
        alert(`Desempenho excelente`)
        break

    default:
        alert(`Algum valor foi digitado incorretamente`)


    

}


