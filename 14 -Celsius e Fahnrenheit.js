/*Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela. */

let grausCelsius, grausFahrenheit

grausCelsius = Number(prompt('Digite a temperatura em Graus Celsius (ºC)'))

grausFahrenheit = grausCelsius * 1.8 + 32

alert(`Conversão Celsius para Fahrenheit concluída com sucesso: ${grausCelsius}ºC para ${grausFahrenheit}ºF`)