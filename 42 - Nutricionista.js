//todo :Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten) e pacientes com intolerância à lactose. Criar um programa onde o paciente deve digitar seu nome e em seguida responder se é celíaco (primeira pergunta) e se é intolerante à lactose (segunda pergunta). Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas. Em seguida coletar os dados de 3 alimentos, sendo digitado o nome do alimento, se ele contém glúten ou não e se ele contém lactose ou não. Ao final, informar se o paciente pode comer os 3 alimentos digitados "Dieta adequada!" ou não pode "Dieta inadequada, contém alimentos aos quais o paciente é intolerante!".

let pacienteCeliaco, pacienteLactose, comidaAnalise, temLactose, temGlutem, dietaInadequada = false, contador = 0, qtdComidas = 3

pacienteCeliaco = prompt(`Você é celíaco? (Sim ou Não)`).toUpperCase().trim()
pacienteLactose = prompt(`Você é intolerante à lactose? (Sim ou Não)`).toUpperCase().trim()

while (contador < qtdComidas){

    comidaAnalise = prompt('Qual o alimento que você quer inserir na dieta?')
    temLactose = prompt('O alimento tem Lactose? (sim ou não)').toUpperCase().trim()
    temGlutem = prompt('O alimento tem Glutén? (sim ou não)').toUpperCase().trim()


    contador++

    
    switch(true){

        case temLactose === 'SIM' && pacienteLactose === 'SIM':
        case temGlutem === 'SIM' && pacienteCeliaco === 'SIM':

            dietaInadequada = true
            break
        case temLactose === 'NÃO' && temGlutem === 'NÃO':
        case temLactose === 'SIM' && temGlutem === 'NÃO':
        case temLactose === 'NÃO' && temGlutem === 'SIM':
        case temLactose === 'SIM' && temGlutem === 'SIM':

            break
        
        default :
            alert('Não validado')

            

    }

}

if(dietaInadequada == true){

    alert(`Dieta inadequada, contém alimentos aos quais o paciente é intolerante!`)

}else{

    alert(`Dieta adequada`)

}