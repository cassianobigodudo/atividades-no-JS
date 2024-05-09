//todo Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia. Você pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficarão no mesmo quarto. Informar a quantidade de pessoas, o número de diárias e quantas pessoas do grupo vão querer café diário. Mostrar na tela o total a pagar.

let diariaPorQuarto = 280, cafePorPessoaDia = 15, qtdPessoas, numeroDias, numeroPessoasCafe, valorTotal

qtdPessoas = Number(prompt(`Quantidades de pessoas no quarto:`))
numeroPessoasCafe = Number(prompt(`Quantidades de pessoas que querem café diário:`))
numeroDias = Number(prompt(`Quantidades de dias que vão se hospedar:`))

if (numeroPessoasCafe > qtdPessoas){

    alert(`Numero de pessoas que querem café nao corresponde com o número de pessoas hospedadas`)

}else{

valorTotal = (diariaPorQuarto * numeroDias) + ((numeroPessoasCafe * cafePorPessoaDia)*numeroDias) 

alert('O valor total a se pagar será de R$' + valorTotal)

}
