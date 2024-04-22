/*3) Solicite ao usuário um valor em horas e converta para minutos 
e segundos.*/

    let valorHoras, valorMinutos, valorSegundos

    valorHoras = Number(prompt('Digite um valor de horas: '))

    valorMinutos = valorHoras * 60
    valorSegundos = valorMinutos * 60

    alert(`O valor que você digitou em horas (${valorHoras}) foi convertido em ${valorMinutos} minutos e ${valorSegundos} segundos!`)