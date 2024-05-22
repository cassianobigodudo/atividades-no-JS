//todo:  Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia.

let centavosPorquinho, somaCentavos = 0, transformarDecimal = 100, valorTotal
let contMoedaUmCent = 0, contMoedaCincoCents = 0, contMoedaDezCents = 0, contMoedaVinteCincoCents = 0, contMoedaCinquentaCents = 0

do{
    
    centavosPorquinho = Number(prompt('Digite a moeda que você quer botar no seu cofrinho: (Válidas somente moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. Digite 0 para encerrar o programa)'))


    switch (centavosPorquinho) {
        case 1 : 

            contMoedaUmCent ++
            alert(centavosPorquinho +' centavos adicionados ao cofrinho!')
            somaCentavos += centavosPorquinho
             break

        case 5 :
            
            contMoedaCincoCents ++
            alert(centavosPorquinho +' centavos adicionados ao cofrinho!')
            somaCentavos += centavosPorquinho
             break

        case 10 :
            
            contMoedaDezCents ++
            alert(centavosPorquinho +' centavos adicionados ao cofrinho!')
            somaCentavos += centavosPorquinho
             break

        case 25 :

            contMoedaVinteCincoCents ++
            alert(centavosPorquinho +' centavos adicionados ao cofrinho!')
            somaCentavos += centavosPorquinho
             break

        case 50 :

            contMoedaCinquentaCents ++
            alert(centavosPorquinho +' centavos adicionados ao cofrinho!')
            somaCentavos += centavosPorquinho
             break

        case 0:

            alert('O programa será encerrado.')
            break
    
        default:

            alert('Valor inválido, apenas moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos.')
            break
    }

}while(centavosPorquinho != 0)


valorTotal = somaCentavos / transformarDecimal

alert(`O valor total no cofrinho deu R$${valorTotal}\n\nUm centavo: ${contMoedaUmCent}\nCinco centavos: ${contMoedaCincoCents}\nDez centavos: ${contMoedaDezCents}\nVinte e cinco centavos: ${contMoedaVinteCincoCents}\nCinquenta centavos: ${contMoedaCinquentaCents}`)
