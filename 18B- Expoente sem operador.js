//todo Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **).

let numeroBase, numeroExpoente, resultadoConta, contador = 1

numeroBase = Number(prompt(`Digite um número`))
numeroExpoente = Number(prompt(`Digite seu expoente`))
resultadoConta = numeroBase

while(contador < numeroExpoente){

    
    contador++
    resultadoConta = resultadoConta * numeroBase


}

alert('O seu resultado deu '+ resultadoConta)
