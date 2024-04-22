/* 5) Peça três números ao usuário e os exiba em ordem crescente.*/
let numeros = [0,1,2]

numeros[0] = Number(prompt('Digite o seu primeiro numero'))
numeros[1] = Number(prompt('Digite o seu segundo numero'))
numeros[2] = Number(prompt('Digite o seu terceiro numero'))

alert(`Os seus números em ordem crescente ${numeros.sort()}`)