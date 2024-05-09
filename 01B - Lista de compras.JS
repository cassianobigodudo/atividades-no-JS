//todo Na sua lista de compras do mercado, constam apenas 3 itens: arroz, batata palha e um suco de garrafa. Porém, você possui apenas uma nota de R$100 para pagar. Faça um programa no qual sejam digitados os valores dos itens e mostre na tela valor que você deve receber (troco).

let valorInicial = 100, valorArroz,valorBatata,valorSuco, valorFinal

valorArroz = Number(prompt(`Quanto é o valor do arroz?`))
valorFinal = valorInicial - valorArroz

valorBatata = Number(prompt(`Quanto é o valor da batata palha?`))
valorFinal = valorFinal - valorBatata

valorSuco = Number(prompt(`Quanto é o valor do suco de caixinha?`))
valorFinal = valorFinal - valorSuco


alert(`Você vai receber R$${valorFinal} de troco`)