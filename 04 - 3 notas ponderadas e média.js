/*4) Solicite ao usuário três notas e seus respectivos pesos, e calcule 
a média ponderada.*/

 let qtdProvas = 3, mediaNotas, provasSomadas, notaProvaUm, notaProvaDois, notaProvaTres
 let notaComPesoUm, notaComPesoDois, notaComPesoTres
 let pesoProvaUm, pesoProvaDois, pesoProvaTres

 pesoProvaUm = Number(prompt('Digite o peso da primeira prova (de 0 a 100)'))
 notaProvaUm = Number(prompt('Digite a nota da primeira prova (de 0 a 10)'))
 
 // transformo o número em decimal
 notaComPesoUm = (notaProvaUm/10) * (pesoProvaUm/100)

 pesoProvaDois = Number(prompt('Digite o peso da segunda prova (de 0 a 100)'))
 notaProvaDois = Number(prompt('Digite a nota da segunda prova (de 0 a 10)'))
 notaComPesoDois = (notaProvaDois/10) * (pesoProvaDois/100)

 pesoProvaTres = Number(prompt('Digite o peso da terceira prova (de 0 a 100)'))
 notaProvaTres = Number(prompt('Digite a nota da terceira prova (de 0 a 10)'))
 notaComPesoTres = (notaProvaTres/10) * (pesoProvaTres/100)
 
 // somo todos os decimais e multiplico por 10 no final
 provasSomadas = notaComPesoUm + notaComPesoDois + notaComPesoTres
 mediaNotas = provasSomadas * 10
 
 
 alert(`A média das ${qtdProvas} provas é ${mediaNotas.toFixed(1)}`)

