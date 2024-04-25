/*Crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço. Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente [Nome], com [idade] anos, [nacionalidade], reside no endereço [endereço]". Exemplo: Cliente Lucas, com 29 anos, brasileiro, reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis. */

let nomePessoa, idadePessoa, nacionalidadePessoa, enderecoPessoa

nomePessoa = prompt('Digite seu nome:')
idadePessoa = Number(prompt('Digite sua idade:'))
nacionalidadePessoa = prompt('Digite sua nacionalidade:')
enderecoPessoa = prompt('Digite seu endereço:')

alert(`Cliente ${nomePessoa}, com ${idadePessoa} anos, ${nacionalidadePessoa}, reside no endereço ${enderecoPessoa}`)