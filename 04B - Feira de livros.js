//todo Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto. Criar um programa que receba os valores dos 3 livros e mostra na tela o total dos livros sem desconto e com desconto

let valorLivro, somaLivros = 0, descontoLivros = 15, valorDesconto, qtdLivros = 3
let contador = 0

while (contador < qtdLivros){

    contador++
    valorLivro = Number(prompt(`Digite o valor do seu ${contador}º livro`))
    somaLivros = somaLivros + valorLivro

}

valorDesconto = descontoLivros*somaLivros / 100
valorDesconto = somaLivros - valorDesconto

alert(`O valor total dos 3 livros é R$${somaLivros}, e com ${descontoLivros}% de desconto os livros ficam por R$${valorDesconto}`)