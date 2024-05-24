//todo: 1) Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do próprio número por todos abaixo dele até 1. (Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120).

let numeroPergunta, resultadoEquacao

do{

    numeroPergunta = Number(prompt('Digite um número e te direi o fatorial dele'))

}while(isNaN(numeroPergunta))


resultadoEquacao = numeroPergunta

for(i=numeroPergunta ; i > 1; i--){

    resultadoEquacao *= i-1

    console.log(resultadoEquacao)

}

alert(`O fatorial de ${numeroPergunta} é ${resultadoEquacao}`)