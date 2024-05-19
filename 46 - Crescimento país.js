//todo: Supondo que a população de um país A seja da ordem de 80.000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200.000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

let populacaoPaisA = 80000, populacaoPaisB = 200000, porcentagemCrescimentoA = 3, porcentagemCrescimentoB = 1.5
let crescimentoPopulacionalAnualA, crescimentoPopulacionalAnualB, anosPassando = 0

while (populacaoPaisA < populacaoPaisB){

    crescimentoPopulacionalAnualA = populacaoPaisA * porcentagemCrescimentoA / 100

    crescimentoPopulacionalAnualB = populacaoPaisB * porcentagemCrescimentoB / 100

    populacaoPaisA += crescimentoPopulacionalAnualA
    populacaoPaisB += crescimentoPopulacionalAnualB

    anosPassando++
}

populacaoPaisA = Number((populacaoPaisA).toFixed(2))
populacaoPaisB = Number((populacaoPaisB).toFixed(2))

alert(`O país A (${populacaoPaisA}) ultrapassou a população do país B (${populacaoPaisB}) em ${anosPassando} anos`)