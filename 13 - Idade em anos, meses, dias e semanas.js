/*Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. */

let nascimentoUsuario, anoAtual, idadeAnos, idadeMeses, idadeSemanas, idadeDias

nascimentoUsuario = Number(prompt('Digite o ano de seu nascimento (YYYY):'))
anoAtual = Number(prompt('Digite o ano atual (YYYY):'))

idadeAnos = anoAtual - nascimentoUsuario
idadeMeses = idadeAnos * 12
idadeSemanas = idadeMeses * 4
idadeDias = idadeSemanas * 7

alert(`Você está vivo a ${idadeAnos} anos, ${idadeMeses} meses, ${idadeSemanas} semanas e ${idadeDias} dias. `)