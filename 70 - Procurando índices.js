//todo: 6) Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. Caso exista, o programa deve mostrar todos os índices que ele se encontra.

let vetorNumeros = [1,2,2,1,2,1,7,8,9,9]
let procurarNumero
let numeroIndices = []

procurarNumero = Number(prompt('Qual número você quer encontrar?'))

for(i=0;i<vetorNumeros.length;i++){

    if(procurarNumero == vetorNumeros[i]){

        numeroIndices.push(i)

    }

}

if(vetorNumeros.includes(procurarNumero)){

    alert('O número existe nos índices: ' + numeroIndices)

}else{

    alert('Não foi encontrando esse número dentro do vetor')

}

