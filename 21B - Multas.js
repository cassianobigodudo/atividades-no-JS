//todo Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.

let qtdMultas, valorMulta, somaMultas = 0, contador = 0, pontosMulta, somaPontos= 0, pontosIrregular = 21

qtdMultas = Number(prompt(`Quantas multas deseja cadastrar?`))

while (contador < qtdMultas){

    contador++
    valorMulta = Number(prompt(`Qual o valor da ${contador}ª multa?`))
    somaMultas = somaMultas + valorMulta
    pontosMulta = Number(prompt(`Qual a quantidade de pontos da ${contador}ª multa?`))
    somaPontos = somaPontos + pontosMulta

}

alert (`Você está devendo R$${somaMultas} para nós`)

if(somaPontos >= pontosIrregular){

    alert('Você está irregular')

}else{

    alert('Você não está irregular')

}