/*Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.*/

let pessoasFesta = 45, choppInicial = 300, choppPorPessoa
let choppDesperdicio, choppSobrou

choppDesperdicio = Number(prompt(`Quanto de chopp foi desperdiçado na festa? (litros)`))
choppSobrou = Number(prompt(`e quanto que sobrou? (litros)`))

if(choppDesperdicio == 0 && choppSobrou == 0){

    choppPorPessoa = choppInicial / pessoasFesta
    alert(`Em média foi bebido ${choppPorPessoa}L de chopp por pessoa`)

}else{

    choppInicial = choppInicial - choppDesperdicio - choppSobrou
    choppPorPessoa = choppInicial / pessoasFesta
    alert(`Em média foi bebido ${choppPorPessoa.toFixed(3)}L de chopp por pessoa`)

}

