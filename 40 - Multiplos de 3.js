//todo: Desenvolver um programa que receba um número inteiro e verifique se ele é múltiplo de 3. Após digitar o número, mostrar uma das seguintes mensagens na tela “É múltiplo de 3!” ou “Não é múltiplo de 3”.

let numero

numero  = Number(prompt('Digite um número e eu te digo se ele é um múltiplo de 3 ou não:'))

if (numero % 3 === 0){

    alert('Múltiplo de 3!')

}else{

    alert('Não é múltiplo de 3!')

}