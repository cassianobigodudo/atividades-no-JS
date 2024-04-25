/* Solicite um número ao usuário e informe se é positivo ou negativo*/

let numero

numero = Number(prompt(`Escolha seu número e veja se ele é positivo ou negativo`))

if(numero < 0){

    alert('Seu número é negativo')
}else if (numero >=0){

    alert('Seu número é positivo')
}else{
    alert('Você não inseriu uma resposta válida')
}