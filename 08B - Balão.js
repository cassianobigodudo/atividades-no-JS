//todo Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15 reais. No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. Criar um programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na tela o total cobrado pelo passeio.

//?30 reais a cada metro cubico
let qtdPessoas, tempoPasseio, gasPorMinuto = 30, valorPorPessoa = 20, valorTotal

qtdPessoas = Number(prompt('Quantidade de pessoas que participarão:'))

if(qtdPessoas > 4){

    alert('Limite máximo de pessoas é 4')

}else{

    tempoPasseio = Number(prompt('Quantidade de minutos do passeio:'))
    valorTotal = qtdPessoas*valorPorPessoa + gasPorMinuto*tempoPasseio

    alert(`O valor total do passeio é de R$` + valorTotal)


}