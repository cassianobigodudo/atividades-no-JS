//todo 3) Verificador de idade para desconto no cinema: Escreva um programa que pergunte a idade do usuário e, se ele tiver menos de 12 anos, conceda um desconto de 50% no ingresso do cinema; se ele tiver entre 12 e 18 anos, conceda um desconto de 25%; caso contrário, não conceda nenhum desconto.

let idadeUsuario, descontoMenorDoze = 50, descontoDezoito= 25, valorIngresso, valorDescontado

idadeUsuario = Number(prompt('Digite a sua idade:'))
valorIngresso = Number(prompt('Digite o valor do ingresso:'))

if(idadeUsuario < 12 && idadeUsuario >=0){
    alert(`O valor do ingresso recebeu ${descontoMenorDoze}% de desconto`)

    descontoMenorDoze = 100 - descontoMenorDoze
    valorDescontado = descontoMenorDoze * valorIngresso / 100

    alert(`de R$${valorIngresso} ficou R$${valorDescontado}`)

}else if (idadeUsuario <= 18){
    alert(`O valor do ingresso recebeu ${descontoDezoito}% de desconto`)

    descontoDezoito = 100 - descontoDezoito
    valorDescontado = descontoDezoito * valorIngresso / 100

    alert(`de R$${valorIngresso} ficou R$${valorDescontado}`)
}else{

    alert('O valor do ingresso deu R$'+ valorIngresso)
    

}



