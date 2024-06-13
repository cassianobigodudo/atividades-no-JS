//todo: 3) Cria um programa onde o usuário digite 5 números inteiros. Ao terminar de digitar os números, mostrar uma lista somente com números ímpares digitados e a soma desses números.

let numerosImpares = []
let numeroAdd
let somaNumeros = 0

for(i=0;i<5;i++){

    do{
        numeroAdd = Number(prompt(`Digite o valor do ${i+1}° número`))
    }while(isNaN(numeroAdd) || !Number.isInteger(numeroAdd))

    if(numeroAdd % 2 != 0){

        numerosImpares.push(numeroAdd)
        somaNumeros += numeroAdd

    }

    console.log(numerosImpares)
}

alert(`Vetor dos números impares: ${numerosImpares}\n\n Soma dos valores: ${somaNumeros}`)
