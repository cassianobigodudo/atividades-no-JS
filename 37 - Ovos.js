//todo:Uma feira está realizando promoção na compra de ovos. Os ovos custam 40 centavos cada, se forem comprados até 12 (uma dúzia), 30 centavos cada, se forem comprados de 13 a 24 (até duas dúzias) e 25 centavos cada, caso sejam comprados mais que duas dúzias. Faça um programa que leia o número de ovos comprados, calcule e mostre na tela o valor total da compra.

let valorOvosUmaDuzia = 0.4, valorOvosDuasDuzias = 0.30, valorOvosAlemDuasDuzias= 0.25
let qtdOvos, valorCompra

qtdOvos = Number(prompt('Quantidade de ovos a serem comprados:'))

switch (true){

    case qtdOvos <= 12:

        valorCompra = (qtdOvos * valorOvosUmaDuzia).toFixed(2)
        alert('O valor da sua compra deu R$' + valorCompra)
        break

    case qtdOvos >= 13 && qtdOvos <=24:

        valorCompra = qtdOvos * valorOvosDuasDuzias
        alert('O valor da sua compra deu R$' + valorCompra)
        break

    case qtdOvos >= 25:

        valorCompra = qtdOvos * valorOvosAlemDuasDuzias
        alert('O valor da sua compra deu R$' + valorCompra)
        break

    default:

        alert('Não foi possível calcular o valor dos ovos')
        break

    
}