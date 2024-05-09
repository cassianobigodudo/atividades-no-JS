//todo Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar também o nome da pessoa com a maior idade).


let nomePessoa, idadePessoa, maiorIdade = -21319, maiorNome, contador = 0, qtdPessoas = 5, somaIdades = 0, mediaIdades

while(contador < qtdPessoas){

    contador++
    nomePessoa = prompt(`Digite o nome da ${contador}ª pessoa`)
    idadePessoa = Number(prompt(`Digite a idade da ${contador}ª pessoa`))

    if(idadePessoa > maiorIdade){

        maiorIdade = idadePessoa
        maiorNome = nomePessoa

    }

    somaIdades = somaIdades + idadePessoa

}

mediaIdades = somaIdades / qtdPessoas

alert(`A média de todas as idades é ${mediaIdades} anos, sendo a pessoa mais velha a/o ${maiorNome} com ${maiorIdade} anos.`)