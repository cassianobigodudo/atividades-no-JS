/* Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. */

let pesoKgPlastico = 1, valorKgPlastico = 0.2
let pesoKgPapel = 1, valorKgPapel = 0.1
let pesoKgMetal = 1, valorKgMetal = 0.1
let somaValor = 0, qtdPlastico, qtdPapel, qtdMetal, valorVendaPlastico, valorVendaPapel, valorVendaMetal

qtdPlastico = Number(prompt(`Quantidade de plástico em kgs:`))
valorVendaPlastico = (qtdPlastico * valorKgPlastico) / 1
somaValor = somaValor + valorVendaPlastico

qtdPapel = Number(prompt(`Quantidade de Papel em kgs:`))
valorVendaPapel = (qtdPapel * valorKgPapel) / 1
somaValor = somaValor + valorVendaPapel

qtdMetal = Number(prompt(`Quantidade de Metal em kgs:`))
valorVendaMetal = (qtdMetal * valorKgMetal) / 1
somaValor = somaValor + valorVendaMetal

alert(`O valor total deu ${somaValor} para cobrar, confira a tabela o preço por kilo\n\n${qtdPlastico}kg --> R$${valorVendaPlastico}\n\n${qtdPapel}kg --> R$${valorVendaPapel}\n\n${qtdMetal}kg --> R$${valorVendaMetal}`)