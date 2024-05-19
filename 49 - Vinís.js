//todo : Você é um colecionador de vinis e resolveu ir ao sebo para comprar alguns vinis raros. Porém, você tem apenas R$200 para gastar. Faça um programa que pergunte o nome do vinil e o valor, repetidamente. Caso o valor ultrapasse R$200, encerrar (desconsiderando o último vinil). Mostrar na tela:

//todo! : a) O total gasto em reais dos vinis.
//todo! : b) O valor que sobrou em dinheiro.
//todo! : c) Quantos vinis foram comprados.
//todo! : d) A média de preço dos vinis.
//todo! : e) O vinil mais caro e o mais barato.

let qtdVinilDesejados, contador = 0, valorCarteira = 200, nomeVinil, valorVinil, somaVinil = 0, mediaVinil, maiorValor, menorValor, nomeMaiorVinil, nomeMenorVinil, qtdVinilAdquiridos = 0

do {

   qtdVinilDesejados = Number(prompt(`Quantidade de viníl a ser comprado: `)) 

} while (qtdVinilDesejados < 0)


while (contador < qtdVinilDesejados && valorCarteira >= 0) {
    
    nomeVinil = prompt(`Digite o nome do viníl`)
    valorVinil = Number(prompt(`Valor do viníl`))

    if (valorCarteira - valorVinil <= 0){

        alert(`O seu limite foi atingido, a compra vai continuar desconsiderando seu último pedido.`)

        qtdVinilDesejados--
        break

    }

    somaVinil += valorVinil
    valorCarteira -= valorVinil
    qtdVinilAdquiridos++

    if(contador == 0){

        maiorValor = valorVinil
        nomeMaiorVinil = nomeVinil
        menorValor = valorVinil
        nomeMenorVinil = nomeVinil

    }else{

        if(valorVinil > maiorValor){

            maiorValor = valorVinil
            nomeMaiorVinil = nomeVinil

        }else if(valorVinil < menorValor){

            menorValor = valorVinil
            nomeMenorVinil = nomeVinil

        }

    }

    contador++
}

mediaVinil = somaVinil/ qtdVinilAdquiridos

if (qtdVinilDesejados <= 0 ){

    alert(`Nenhuma compra foi efetuada`)

}else{

alert(`>>>Loja do vinís<<<\n\n -- Valor total R$: ${(somaVinil).toFixed(2)} --\n -- Valor da carteira R$: ${(valorCarteira).toFixed(2)} --\n -- Quantidade de vinil(nís) adquiridos ${qtdVinilAdquiridos} --\n -- Média dos preços R$: ${(mediaVinil).toFixed(2)} --\n -- Viníl mais caro: ${nomeMaiorVinil} por R$${(maiorValor).toFixed(2)} --\n -- Viníl mais barato: ${nomeMenorVinil} por R$${(menorValor).toFixed(2)} --`)
}