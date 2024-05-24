//todo: Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados.

let numeroPergunta, maiorNumero, menorNumero


for(i=0; i < 10; i++){

    do{

        numeroPergunta = Number(prompt(`Digite o ${i+1}º número de 0 a 50`))

    }while(isNaN(numeroPergunta) || numeroPergunta < 0 || numeroPergunta > 50)
        
    
        if (i == 0){

            maiorNumero = numeroPergunta
            menorNumero = numeroPergunta

        }else{

            if(numeroPergunta > maiorNumero){

                maiorNumero = numeroPergunta

            }else if (numeroPergunta < menorNumero){

                menorNumero = numeroPergunta

            }


    }


}

alert(`O maior número é ${maiorNumero} e o menor número é ${menorNumero}`)