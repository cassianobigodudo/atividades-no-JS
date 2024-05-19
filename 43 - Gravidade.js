//todo: Criar um programa que recebe o peso (kg) de um objeto no planeta Terra. Em seguida, apresentar a lista abaixo e pedir ao usuário para digitar o número desejado para escolher outros lugares do sistema solar. Ao final mostrar, o peso desse objeto no lugar selecionado. Lista de locais (lua e planetas) e gravidades relativas à Terra:

//todo: 1 - 0,06 Plutão
//todo: 2 - 0,17 Lua
//todo: 3 - 0,38 Mercúrio
//todo: 4 - 0,38 Marte
//todo: 5 - 0,91 Vênus
//todo: 6 - 0,92 Urano
//todo: 7 - 1,06 Saturno
//todo: 8 - 1,19 Netuno
//todo: 9 - 2,34 Júpiter

let planetaDesejado, objetoPeso, objetoPesoOutroPlaneta

objetoPeso = Number(prompt(`Digite o peso do seu objeto (kg)`))
planetaDesejado = Number(prompt(`Digite o planeta ou a lua escolhido para descobrir o peso do seu objeto:\n\n1 - 0,06 Plutão\n2 - 0,17 Lua\n3 - 0,38 Mercúrio\n4 - 0,38 Marte\n5 - 0,91 Vênus\n6 - 0,92 Urano\n7 - 1,06 Saturno\n8 - 1,19 Netuno\n9 - 2,34 Júpiter `))

switch (planetaDesejado){

    case 1:
        objetoPesoOutroPlaneta = objetoPeso * 0.06
        alert(`Seu objeto com seu novo peso: ${(objetoPesoOutroPlaneta).toFixed(2)} kG`)
        break

    
    case 2:
        objetoPesoOutroPlaneta = objetoPeso * 0.17
        alert(`Seu objeto com seu novo peso: ${(objetoPesoOutroPlaneta).toFixed(2)} kG`)
        break

    case 3:
    case 4:
        objetoPesoOutroPlaneta = objetoPeso * 0.38
        alert(`Seu objeto com seu novo peso: ${(objetoPesoOutroPlaneta).toFixed(2)} kG`)
        break

    case 5:
        objetoPesoOutroPlaneta = objetoPeso * 0.91
        alert(`Seu objeto com seu novo peso: ${(objetoPesoOutroPlaneta).toFixed(2)} kG`)
        break

    case 6:
        objetoPesoOutroPlaneta = objetoPeso * 0.92
        alert(`Seu objeto com seu novo peso: ${(objetoPesoOutroPlaneta).toFixed(2)} kG`)
        break

    case 7:
        objetoPesoOutroPlaneta = objetoPeso * 1.06
        alert(`Seu objeto com seu novo peso: ${(objetoPesoOutroPlaneta).toFixed(2)} kG`)
        break

    case 8:
        objetoPesoOutroPlaneta = objetoPeso * 1.19
        alert(`Seu objeto com seu novo peso: ${(objetoPesoOutroPlaneta).toFixed(2)} kG`)
        break

    case 9:
        objetoPesoOutroPlaneta = objetoPeso * 2.34
        alert(`Seu objeto com seu novo peso: ${(objetoPesoOutroPlaneta).toFixed(2)} kG`)
        break

    default:
        alert(`Inválido!`) 
}