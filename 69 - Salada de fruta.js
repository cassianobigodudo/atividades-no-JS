//todo:  Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas.

let saladaFrutas = []
let frutaAdd

do{

    frutaAdd = prompt('Qual fruta adicionar?').toUpperCase().trim()
    saladaFrutas.push(frutaAdd)

    
}while(frutaAdd != 'CEREJA')

alert('Sua salada de frutas está pronta: '+ saladaFrutas)

