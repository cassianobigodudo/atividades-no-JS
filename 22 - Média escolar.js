//todo Calculadora de média escolar: Faça um programa que solicite ao usuário as notas de três provas e, em seguida, calcule e exiba a média. Se a média for maior ou igual a 7, exiba "Aprovado"; senão, exiba "Reprovado"

let qtdProvas, somaNotas = 0, mediaNotas, notaAprovação = 7, contador = 0, notaProva

qtdProvas = Number(prompt('Quantidade de provas:'))

while (contador< qtdProvas){
    contador++
    notaProva = Number(prompt(`Qual a nota da sua ${contador}° prova`))
    somaNotas = somaNotas + notaProva

}
mediaNotas = somaNotas / qtdProvas

alert('Sua média final deu ' + mediaNotas.toFixed(1))

if(mediaNotas >= 7){
    alert('Parabéns, você foi aprovado!')
}else{
    alert('Puts, reprovado!')
}