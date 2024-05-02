//todo Simulador de trânsito: Crie um programa que pergunte a idade do usuário e, se ele tiver idade suficiente para dirigir (por exemplo, 18 anos), exiba "Você pode dirigir"; caso contrário, exiba "Você ainda não pode dirigir".

let idadeUsuário

idadeUsuário = Number(prompt('Digite a sua idade'))

if(idadeUsuário >= 18){
    alert('Você pode dirigir!')
}else {
    alert('Você não pode dirigir!')
}