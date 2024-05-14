//todo: No site Mercado Livre, os produtos a venda podem ser avaliados pelos compradores, o que gera um índice (média aritmética) utilizado pelo algoritmo para definir se o produto deve ou não ganhar destaque: destaque na página principal, destaque na página da categoria daquele produto, destaque na página de promoções ou não deve ganhar destaque. O índice é calculado através da avaliação de 3 quesitos pelo comprador: qualidade do produto, custo benefício, durabilidade. Criar um sistema utilizando a estrutura condicional switch / case, que receba avaliações do comprador nesses três quesitos (notas de 0 a 10) sobre um determinado produto e gere o índice dele. Após receber as avaliações, mostrar o índice do produto e indicar se conseguiu destaque para: índice abaixo de 5 (não ganha destaque), índice entre 5 e 7 (destaque na página da categoria), índice entre 7 a 9 (destaque em promoções), índice igual a 9 ou maior (destaque na página principal).

let mediaAvaliacao, somaPontos = 0, pontuacaoGanha, criteriosDestaque = 3

    pontuacaoGanha = Number(prompt('Qualidade do produto: (0 a 10)'))

if(pontuacaoGanha < 0 || pontuacaoGanha > 10){

    alert('Pontuação inválida, encerrando programa')

}else{

    somaPontos = somaPontos + pontuacaoGanha

    pontuacaoGanha = Number(prompt('Custo benefício do produto: (0 a 10)'))

if(pontuacaoGanha < 0 || pontuacaoGanha > 10){

    alert('Pontuação inválida, encerrando programa')

}else{

    somaPontos = somaPontos + pontuacaoGanha

    pontuacaoGanha = Number(prompt('Durabilidade do produto: (0 a 10)'))

if(pontuacaoGanha < 0 || pontuacaoGanha > 10){

    alert('Pontuação inválida, encerrando programa')

}else{

    somaPontos = somaPontos + pontuacaoGanha
    mediaAvaliacao = (somaPontos / criteriosDestaque).toFixed(2)

    switch (true){

        case mediaAvaliacao < 5:
            
            alert('Não ganha destaque... Média de pontuação: ' + mediaAvaliacao)
            break
        
        case mediaAvaliacao >= 5 && mediaAvaliacao < 7:
            
            alert('Destaque na página da categoria. Média de pontuação: ' + mediaAvaliacao)
            break

        case mediaAvaliacao >= 7 && mediaAvaliacao < 9:

            alert('Destaque em promoções! Média de pontuação: ' + mediaAvaliacao)
            break

        case mediaAvaliacao >= 9:
            
            alert('Destaque na página principal!! Média de pontuação: ' + mediaAvaliacao)
            break

        default:

            alert('ERROR 404.')
        


    }

}
}
}