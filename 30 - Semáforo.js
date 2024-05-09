//todo Faça um programa no qual o usuário digite a cor que está no semáforo (verde, amarelo, vermelho). Caso seja digitado verde, mostre na tela "Pode seguir!", se for digitado amarelo, mostre "Alerta, pare!" e se for digitado vermelho, mostre "Pare imediatamente!

let sinalSemaforo

sinalSemaforo = prompt('Digite a cor que está no semáforo (verde, amarelo, vermelho):').toUpperCase().trim()

switch(true){

    case sinalSemaforo == 'VERDE':
        alert('Pode passar!')
        break
        
    case sinalSemaforo == 'AMARELO':
        alert('Alerta, vai parando!')
        break
        
    case sinalSemaforo == 'VERMELHO':
        alert('Pare imediatamente!!')
        break
        
    default:
        alert('Cor inválida!')
        break
        

}