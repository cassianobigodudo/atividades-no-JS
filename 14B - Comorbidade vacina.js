//todo Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!". 

let idadePessoa, nomePessoa, comorbidadePessoa

nomeEspecie = prompt(`Seu nome:`)
idadePessoa = Number(prompt(`Sua idade:`))
comorbidadePessoa = prompt(`Tem comorbidades? (S ou N)`)

if(idadePessoa >= 60 || comorbidadePessoa.toUpperCase().trim() == `S`){

    alert(`Pode se vacinar!`)

}else{

    alert(`Não pode se vacinar!`)

}