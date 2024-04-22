/*4) Solicite ao usuário três notas e seus respectivos pesos, e calcule 
a média ponderada.*/

 let mediaNotas, notaProva, somaNotas= 0 , contador = 0, qtdProvas = 3

 while(contador < qtdProvas){

    contador++
    notaProva = Number(prompt(`Digite a nota da ${contador}º prova`))
    somaNotas = somaNotas + notaProva

 }

 mediaNotas = somaNotas / qtdProvas

 alert(`A média das ${qtdProvas} provas é ${mediaNotas}`)

