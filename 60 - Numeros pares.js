//todo: Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem “Um dos números digitados era ímpar”.

let isImpar = false
let somaNumeros = 0, mediaNumeros, numeroPergunta

for(i=0; i<5; i++){

    numeroPergunta = Number(prompt(`Digite o ${i +1}º número`))

    if (numeroPergunta % 2 == 0){

        somaNumeros += numeroPergunta

    }else{

        isImpar = true
        break

    }
}

if (isImpar == true){

    alert(`O número digitado não é par`)

}else{

    mediaNumeros = somaNumeros / i

    alert(`A média dos números deu ${mediaNumeros.toFixed(2)}`)

}