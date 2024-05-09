//todo Faça um programa do qual o usuário digite quatro números e ao final mostre o maior número, o menor número, e a soma dos outros dois números (que não são o maior nem o menor). Caso existam números repetidos digitados, após o usuário digitar os quatro números, não mostrar maior, menor nem soma, mas sim uma mensagem "Você digitou números repetidos".

let numeroUm, numeroDois, numeroTres, numeroQuatro, numeroMaior, numeroMenor, somaNumeros = 0, somaMeio = 0

numeroUm = Number(prompt('Digite o primeiro número'))
somaNumeros = somaNumeros + numeroUm
numeroDois = Number(prompt('Digite o segundo número'))
somaNumeros = somaNumeros + numeroDois
numeroTres = Number(prompt('Digite o terceiro número'))
somaNumeros = somaNumeros + numeroTres
numeroQuatro = Number(prompt('Digite o quarto número'))
somaNumeros = somaNumeros + numeroQuatro

if (numeroUm === numeroDois || numeroUm === numeroTres || numeroUm === numeroQuatro || numeroDois === numeroTres || numeroDois === numeroQuatro || numeroTres === numeroQuatro){

    alert('Um dos números é repetido')

}else{

    numeroMaior = numeroUm
    numeroMenor = numeroUm

    if(numeroDois > numeroMaior){

        numeroMaior = numeroDois

    }else if (numeroDois < numeroMenor){

        numeroMenor = numeroDois

    }
    if(numeroTres > numeroMaior){

        numeroMaior = numeroTres

    }else if (numeroTres < numeroMenor){

        numeroMenor = numeroTres

    }
    if(numeroQuatro > numeroMaior){

        numeroMaior = numeroQuatro

    }else if (numeroQuatro < numeroMenor){

        numeroMenor = numeroQuatro

    }

    somaMeio = somaNumeros - numeroMaior - numeroMenor

    alert(`Número maior : ${numeroMaior}\nNúmero menor: ${numeroMenor}\nSoma dos números ${somaMeio}`)

}

