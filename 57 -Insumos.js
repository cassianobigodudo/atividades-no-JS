//todo: Um determinado restaurante trabalha com limite de lotação de 50 pessoas. Porém, mesmo com esse limite, o restaurante pode encerrar seu atendimento antes do horário por falta de insumos para produção das refeições. Criar um programa que receba os dados da quantidade de pessoas que chegam ao restaurante (repetidamente) e se os insumos estão "ok" ou "insuficientes". Caso alguma das duas possibilidades aconteça, encerrar o programa e mostrar ao final o motivo do encerramento (atingiu limite de pessoa ou faltaram insumos).

let limiteLotacao = 50
let isInsuficiente = false, isLotado = false
let clienteChegando, situacaoInsumo

do{

    do{

        clienteChegando = Number(prompt(`Quantidade de pessoas chegando`))
    
    }while(isNaN(clienteChegando) || clienteChegando <= 0)

        limiteLotacao -= clienteChegando

        if(limiteLotacao < 0){

            isLotado = true
            break
        }

    do{

        situacaoInsumo = prompt(`Como está a situação dos insumos? ('ok' ou 'insuficiente')`).toUpperCase().trim()

    }while (situacaoInsumo != `OK` && situacaoInsumo != `INSUFICIENTE`)

        if(situacaoInsumo == `INSUFICIENTE`){

            isInsuficiente = true
            break

        }

}while (isInsuficiente == false || isLotado == false)


switch (true){
    case isInsuficiente == true:
        
        alert(`O programa encerrou por não ter insumos suficiente`)
        break;

    case isLotado == true:

        alert('O programa encerrou pois está lotado')
        break
}

 