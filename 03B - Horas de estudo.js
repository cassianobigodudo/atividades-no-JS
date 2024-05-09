//todo Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação. Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês e no final mostre a média de horas por semana naquele mês.

let horasEstudadasSemana, somaHoras = 0, mediaHoras
let contador = 0 

while (contador < 4){

    contador++
    horasEstudadasSemana = Number(prompt(`Digite as horas estudadas na ${contador}ª semana`))
    somaHoras = somaHoras + horasEstudadasSemana

}

mediaHoras = somaHoras/contador

alert(`A media de horas estudadas no mês foi de ` + mediaHoras )