//Conversor de moedas: Escreva um programa que converta uma quantidade de dólares em reais. Mostre a conversão na tela. Se o valor do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato.

let dolarEmReal, valorReal, valorDolar

valorDolar = Number(prompt('Quantos dólares você quer converter?'))
dolarEmReal = Number(prompt('Qual a cotação do dólar hoje?'))

valorReal = valorDolar * dolarEmReal
alert(`A conversão em US$${valorDolar} ficou em R$${valorReal}`)

if (dolarEmReal > 5){
    alert('Tá caro fiii')

}else{
    alert('Não tá tão caro, ta baratinho')

}