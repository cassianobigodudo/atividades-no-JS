//todo Elabore um programa que leia a idade e o tempo de serviço de um trabalhador e escreva se ele pode ou nao se aposentar. As condições para aposentadoria são:

//todo a) Ter pelo menos 65 anos
//todo b) Ter trabalhado pelo menos 30 anos
//todo c) Ter pelo menos 60 anos e ter trabalhado pelo menos 25 anos

let idadeTrabalhador, tempoServico

idadeTrabalhador = Number(prompt('Digite a idade do trabalhador:'))
tempoServico = Number(prompt('Digite o tempo de serviço do trabalhador em anos:'))

switch(true){

    case idadeTrabalhador >= 65:
    case tempoServico >= 30:
    case idadeTrabalhador >= 60 && tempoServico >= 25:

        alert('Pode se aposentar!')
        break
    
    case idadeTrabalhador < 65 && tempoServico < 30:
        
        alert('Não pode se aposentar!')
        break

    default:
        alert('Inválido!')
        break



    

}