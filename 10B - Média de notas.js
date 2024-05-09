//todo Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a média. Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média. (DESAFIO: Incluir "Recuperação", sendo a média entre 5 e 7, e "Reprovado" apenas para médias abaixo de 5) 


let qtdProvas, somaNotas = 0, mediaNotas, notaAprovacao = 7, notaRecuperacao= 5, contador = 0, notaProva

qtdProvas = Number(prompt('Quantidade de provas:'))

while (contador< qtdProvas){
    contador++
    notaProva = Number(prompt(`Qual a nota da sua ${contador}° prova`))
    somaNotas = somaNotas + notaProva

}
mediaNotas = somaNotas / qtdProvas

alert('Sua média final deu ' + mediaNotas.toFixed(1))

if(mediaNotas >= notaAprovacao){
    alert('Parabéns, você foi aprovado!')
}else if (mediaNotas < notaRecuperacao){
    alert('Puts, recuperação!')
}else{ 
    alert('Puts, reprovado...')
}