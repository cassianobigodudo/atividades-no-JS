/* 5) Peça três números ao usuário e os exiba em ordem crescente.*/

    let numeroPerguntar, menorNumero, numeroDoMeio, maiorNumero
    let contador = 0, numeros = 3

    while (contador < numeros){

        numeroPerguntar= Number(prompt(`Digite o seu ${contador+1}º número`))
        if(contador == 0){
            maiorNumero = numeroPerguntar
        }else if(contador == 1){

            if(numeroPerguntar > maiorNumero){

                numeroDoMeio = maiorNumero
                maiorNumero = numeroPerguntar
            }else{

                numeroDoMeio = numeroPerguntar

            }

        }else{

            if(numeroPerguntar < numeroDoMeio && numeroPerguntar < maiorNumero){

                menorNumero = numeroPerguntar

            }else if(numeroDoMeio < numeroPerguntar && numeroPerguntar < maiorNumero){

                menorNumero = numeroDoMeio
                numeroDoMeio = numeroPerguntar

            }else if(numeroDoMeio < numeroPerguntar && maiorNumero < numeroPerguntar){

                menorNumero = numeroDoMeio
                numeroDoMeio = maiorNumero
                maiorNumero = numeroPerguntar

            }

        }

        contador++
    }

    alert(`Os seus números em ordem: ${menorNumero}, ${numeroDoMeio}, ${maiorNumero}`)

