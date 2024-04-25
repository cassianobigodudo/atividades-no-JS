/*Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela, com 3 casas depois da vírgula. */

let pesoPessoa, alturaPessoa, imcResultado

alturaPessoa = Number(prompt('Digite a sua altura (m):'))
pesoPessoa = Number(prompt('Digite o seu peso (kg):'))

imcResultado = pesoPessoa / alturaPessoa**2

alert('Seu IMC é ' + imcResultado.toFixed(3))