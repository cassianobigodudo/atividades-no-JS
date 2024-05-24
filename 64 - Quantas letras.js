//todo: Na maioria das linguagens de programação, é possível contar caracteres de uma string (palavra, frase, etc). Criar um sistema no qual o usuário digite 5 palavras e ao final mostre o tamanho em número de caracteres, de cada uma delas. (Pesquisar sobre o comando length, para solução).


let palavraDigitada

for(i=0; i < 5; i++){

    palavraDigitada = prompt('Digite uma palavra e eu vou dizer quantas letras tem')

    alert(`A palavra ${palavraDigitada} tem ${palavraDigitada.length} letras`)


}