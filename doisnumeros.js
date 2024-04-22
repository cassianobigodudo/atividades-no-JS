//Peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.

  let numeroUm, numeroDois

  numeroUm = Number(prompt('Escreva um número'))
  numeroDois = Number(prompt('Escreva outro número'))

  if(numeroUm > numeroDois){

    alert(`O número ${numeroUm} é maior que o número ${numeroDois}`)

  } else if(numeroUm < numeroDois){

    alert(`O número ${numeroUm} é menor que o número ${numeroDois}`)

  } else {

    alert(`Os dois números são enguaisinhos`)

  }

  