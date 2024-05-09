//todo Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.
 
//todo- "Infantil A" de 5 a 7 anos de idade
//todo- "Infantil B" de 8 a 10 anos de idade
//todo- "Juvenil A" de 11 a 13 anos de idade
//todo- "Juvenil B" de 14 a 17 anos de idade
//todo- "Senior" com 18 anos de idade ou mais

let idadeNadador

idadeNadador = Number(prompt('Digite a sua idade: '))

switch(true){

    case idadeNadador >=5 && idadeNadador < 8:
        alert('Você pertence ao Infantil A!')
        break

    case idadeNadador >=8 && idadeNadador < 11:
        alert('Você pertence ao Infantil B!')
        break

    case idadeNadador >=11 && idadeNadador < 14:
        alert('Você pertence ao Juvenil A!')
        break

    case idadeNadador >=14 && idadeNadador < 18:
        alert('Você pertence ao Junevil B!')
        break

    case idadeNadador >=18:
        alert('Você pertence ao Senior!')
        break

    case idadeNadador < 5:
        alert('Você não pode nadar!')
        break

    default:
        alert('Inválido!')
        break
    

}