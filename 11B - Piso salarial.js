//todo Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. Mostrar o salário mensal do funcionário e dizer se ele recebe de acordo com o piso (maior ou igual o piso da categoria) ou se recebe abaixo do piso. (DESAFIO: Incluir uma terceira condição para caso receba exatamente igual ao piso) 

let pisoSalarial, salarioAnual, salarioMensal

pisoSalarial = Number(prompt(`Piso salarial da sua categoria:`))
salarioAnual = Number(prompt(`Seu salário anual:`))

salarioMensal = salarioAnual / 12

if(salarioMensal > pisoSalarial){

    alert(`Você ganha acima do seu piso`)

}else if (salarioMensal < pisoSalarial){

    alert(`Você ganha abaixo do seu piso`)

}else{

    alert(`Você ganha exatamente o seu piso`)

}
