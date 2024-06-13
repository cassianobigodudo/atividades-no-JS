//todo: 2) Desenvolva um programa que o usuário digite 10 números positivos e inteiros, ao final mostre o valor do resultado do somatório da primeira metade dos números menos o somatório da segunda metade. (Somatório da primeira metade - Somatório da segunda metade)

let numerosInteiros = []
let numeroAdd
let somaPrimeiraMetade = 0, somaSegundaMetade = 0, resultadoFinal


for(i=0;i<10;i++){

    do{
    numeroAdd = Number(prompt(`Digite o ${i+1}° número`))
    }while(isNaN(numeroAdd) || numeroAdd < 0)

    numerosInteiros.push(numeroAdd)

}
for(j=0;j<10;j++){

    if(j<5){

        somaPrimeiraMetade += numerosInteiros[j]

        
    }else{
        
        somaSegundaMetade += numerosInteiros[j]

    }

}

console.log(somaPrimeiraMetade)
console.log(somaSegundaMetade)
resultadoFinal = somaPrimeiraMetade - somaSegundaMetade

alert('O somatório da primeira metade menos o somatório da segunda metade deu '+ resultadoFinal)

