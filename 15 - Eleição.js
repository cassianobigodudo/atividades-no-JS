/*Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/

let totalEleitores, votosCandidatoUm, votosCandidatoDois, votosBrancos, votosNulos, somaVotos = 0
let = percentualCandidatoUm, percentualCandidatoDois, percentualVotosBrancos, percentualVotosNulos

totalEleitores = Number(prompt(`Quantos eleitores vão participar das eleições?`))

votosCandidatoUm = Number(prompt('Digite quantos votos o candidato um recebeu:'))
    somaVotos = somaVotos + votosCandidatoUm

votosCandidatoDois = Number(prompt('Digite quantos votos o candidato dois recebeu:'))
    somaVotos = somaVotos + votosCandidatoDois

votosBrancos= Number(prompt('Digite quantos eleitores votaram em branco:'))
    somaVotos = somaVotos + votosBrancos

votosNulos = Number(prompt('Digite quantos votos foram anulados:'))
    somaVotos = somaVotos + votosNulos

if(somaVotos != totalEleitores){
  
    alert('O total de votos ultrapassa o total de eleitores, eleição invalidada')

}else{
    
    percentualCandidatoUm = (100 * votosCandidatoUm) / totalEleitores
    percentualCandidatoDois = (100 * votosCandidatoDois) / totalEleitores
    percentualVotosBrancos = (100 * votosBrancos) / totalEleitores
    percentualVotosNulos = (100 * votosNulos) / totalEleitores

    alert (`A eleição ocorreu com sucesso! ${totalEleitores} participaram das eleições e o candidato um recebeu ${percentualCandidatoUm}% dos votos, o candidato dois recebeu ${percentualCandidatoDois}% dos votos, ${percentualVotosBrancos}% dos eleitores votaram em branco e ${votosNulos}% dos eleitores votaram nulo.`)

}