//todo Um festival de música está terceirizando a montagem da estrutura. A empresa contratada necessita saber uma estimativa de público para calcular a quantidade de bares e banheiros. O cálculo utilizado é de 1 banheiro para cada 50 pessoas e 1 bar para cada 150 pessoas. Criar um programa onde seja digitado o público esperado e mostrar na tela em média quantos banheiros e bares seriam necessários.

let qtdPessoas, pessoasPorBanheiro = 50, pessoasPorBares = 150, mediaBanheiros, mediaBares

qtdPessoas = Number(prompt(`Estimativa de pessoas que participarão do evento?`))

mediaBanheiros = qtdPessoas / pessoasPorBanheiro
mediaBares = qtdPessoas / pessoasPorBares

alert(`Participarão em média ${qtdPessoas} pessoas, tendo ${mediaBanheiros.toFixed(0)} banheiros e ${mediaBares.toFixed(0)} bares`)
