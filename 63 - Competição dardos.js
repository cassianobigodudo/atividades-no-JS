//todo: Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **).

let numeroBase, numeroExpoente, resultadoEquacao

do{
numeroBase = Number(prompt(`Digite o número base`))
numeroExpoente = Number(prompt(`Digite o número expoente`))

}while(isNaN(numeroBase) || isNaN(numeroExpoente))

resultadoEquacao = numeroBase

for(i = 1; i < numeroExpoente; i++){

    resultadoEquacao *= numeroBase
    console.log(resultadoEquacao)


}

if (numeroExpoente == 0){

    alert('O resultado deu 1')

}

alert(`O resultado deu `+ resultadoEquacao)
