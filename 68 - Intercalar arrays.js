//todo: 4) Escreva um programa que leia dois vetores com 3 elementos cada e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.

let vetorNumeroUm = []
let vetorNumeroDois = []
let vetorIntercalado = []
let numeroAdd, contImpar = 0, contPar = 0

for(i=0;i<3;i++){

    numeroAdd = Number(prompt('Digite os números para entrar no primeiro vetor'))
    vetorNumeroUm.push(numeroAdd)

}

for(i=0;i<3;i++){

    numeroAdd = Number(prompt('Digite os números para entrar no segundo vetor'))
    vetorNumeroDois.push(numeroAdd)

}

for(i=0;i<3;i++){

    vetorIntercalado.push(vetorNumeroUm[i])
    vetorIntercalado.push(vetorNumeroDois[i])


}

alert('Seu novo vetor foi criado! ' + vetorIntercalado)