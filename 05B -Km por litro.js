//todo Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem, para veículos (km por litro). Para isso, devem ser digitados os dados de distância total percorrida (km) e total de combustível gasto (litros), mostrando o resultado ao final.

let qtdKmPercorrida, qtdLitrosGastos, mediaKmPorLitro

qtdKmPercorrida = Number(prompt(`Quantos quilômetros você correu?`))
qtdLitrosGastos = Number(prompt(`Quantos litros você gastou?`))

mediaKmPorLitro = qtdKmPercorrida/ qtdLitrosGastos

alert(`Seu veículo fez ${mediaKmPorLitro}Km/l`)