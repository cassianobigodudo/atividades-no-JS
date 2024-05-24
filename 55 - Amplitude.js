//todo: Santa Catarina é conhecida por suas quatro estações bem definidas, o que o torna um estado com alta amplitude térmica (diferença entre a maior e a menor temperatura, registrada em um período). O INMET, Instituto Nacional de Meteorologia, pretende ter os dados de amplitude térmica de uma cidade ou estado. Desenvolva um programa que calcule e mostre os dados diários (segunda à sexta) e a média de amplitude térmica semanal, mostrando os resultados ao final. Exemplo: Digitar o nome da cidade ou estado, perguntar para os cinco dias da semana a maior temperatura do dia e a menor. Mostrar as amplitudes de cada dia e a média.

let maiorTemperatura, menorTemperatura, mediaDia, mediaSemana, somaMedias = 0


for(i = 0; i < 5; i++){


    do{

        maiorTemperatura = Number(prompt(`Digite a maior temperatura do dia`))

    }while(isNaN(maiorTemperatura))

    do{

        menorTemperatura = Number(prompt(`Digite a menor temperatura do dia`))

    }while(isNaN(menorTemperatura))

    mediaDia = maiorTemperatura / menorTemperatura

    alert(`A média do dia é ${mediaDia.toFixed(2)}`)

    console.log (mediaDia)

    somaMedias += mediaDia



}

mediaSemana = somaMedias / 5

alert(`A média da amplitude semanal é ${mediaSemana.toFixed(2)}`)