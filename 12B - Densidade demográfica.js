//todo Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados). Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

let densidadeDemografica, totalHabitantes, areaLocal, densidadeAlta = 100, densidadeBaixa= 25

totalHabitantes = Number(prompt(`Quantidade de habitantes:`))
areaLocal = Number(prompt(`Área do local:`))

densidadeDemografica = totalHabitantes/areaLocal

if(densidadeDemografica > densidadeAlta){

    alert(`Densidade demográfica é alta`)

}else if(densidadeDemografica < densidadeBaixa){

    alert('Densidade demográfica é baixa')

}else{

    alert('Densidade demográfica é média')

}
