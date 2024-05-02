//todo Verificador de número par ou ímpar: Faça um programa que peça ao usuário para inserir um número e determine se é par ou ímpar.

let numeroPerguntar

numeroPerguntar = Number(prompt('Digite um número e te direi se ele é par ou ímpar:'))

if(numeroPerguntar % 2 == 0){

    alert('Seu número é par!')
}else{

    alert('Seu número é impar!')
}