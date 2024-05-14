//todo: Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, isósceles ou escaleno. Quando os três lados forem iguais trata-se de um triângulo equilátero, dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno.

let ladoA, ladoB, ladoC

ladoA = Number(prompt('Tamanho do lado A do triângulo:'))

ladoB = Number(prompt('Tamanho do lado B do triângulo:'))

ladoC = Number(prompt('Tamanho do lado C do triângulo:'))

if (ladoA == ladoB && ladoB == ladoC){

    alert('Triângulo equilátero!')

}else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){

    alert('Triângulo isóceles!')

}else if (ladoA !== ladoB || ladoB !== ladoC || ladoA !== ladoC){

    alert('Triângulo escaleno!')

}else{

    alert('Não foi possível validar o triângulo.')

}