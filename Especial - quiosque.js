//todo: Criar um programa com um menu onde você pode criar uma nova mesa, abrir a comanda da mesa e encerrar a mesa, onde o programa cria comandas para um restaurante e soma os valores da comanda até o usuário pedir para encerrar a mesa, totalizando o valor total + 10% do trabalho dos garçons

let menuOpcao, numeroMesa, pedidoCardapioOpcao, alimentoSelecionado, qtdAlimento, somaValores = 0, valorAlimento, opcaoRetorno, encerrarMesa, confirmarSaida
let mesaAberta = false
let porcentagemGarcom = 10, taxaServico, valorACobrar


// alimentoSelecionado = Number(prompt(` --> BEBIDAS <--\n\n Refrigerantes: R$7,00  |-|-|-|-|   Cervejas: \n  - 1) Coca-cola                       - 5) Brahma lata - R$8,00\n  - 2) Guaraná                          - 6) Heineken long/zero - R$14,00\n  - 3) Fanta                               - 7) Brahma 600ml - R$16,00\n  - 4) Sprite                              - 8) Heineken/Original 600ml - R$20,00`))

//? todos os Do Whiles neste codigo foram usados para menus e para verificar se os valores estão dentro dos parâmetros desejados, evitando de o usuário burlar o código
do{

    do{

        menuOpcao = Number(prompt(`Bem vindo ao menu assistente Quiosque do zé, escolha a sua opção:\n\n1) Criar uma nova mesa\n2) Abrir a comanda da mesa\n3) Encerrar a mesa\n4) Finalizar o programa `))

    }while(isNaN(menuOpcao) ||menuOpcao < 1 || menuOpcao > 4)
    
    //? Switch case para acessar as opções de menus, das diversas que haverão logo abaixo
    switch(menuOpcao){

        case 1:
            
            if(mesaAberta == false){
            //? Criando uma mesa para evitar comandas sem mesa existente com booleano na mesaAberta e numeroMesa em string pois existem mesas que não são numéricas
            numeroMesa = prompt(`Digite o número da nova mesa`)
            mesaAberta = true
            }else{

                //! Esse programa só aguenta uma mesa por vez, que parece um programa bem ruim se botar na prática, mas é só um protótipo

                alert(`Já existe uma mesa aberta, por favor encerre a mesa anterior para criar uma nova`)

            }

            break
        case 2:

            if(mesaAberta == false){
                //?Impossibilitando a continuação do código se não existir mesa
                alert('Nenhuma mesa está aberta no momento')
                break
            }

            do{

                do{

                    pedidoCardapioOpcao = Number(prompt(`--> CARDÁPIO <--\n\n1) Bebidas\n2) Porções\n3) Almoços e pratos especiais\n\n4) Sair do cardápio `))

                }while(isNaN(pedidoCardapioOpcao || pedidoCardapioOpcao < 1 || pedidoCardapioOpcao > 4))


                switch (pedidoCardapioOpcao){

                    case 1:

                        do{
                        
                        do{

                            //! A escrita está bagunçada aqui, eu sei disso, esse foi o jeito mais prático de organizar no alertbox como vai sair, então ignore a escrita torta, no prompt ele vai sair certinho
                            alimentoSelecionado = Number(prompt(` --> BEBIDAS <--\n\n Refrigerantes: R$7,00  |-|-|-|-|   Cervejas: \n  - 1) Coca-cola                       - 5) Brahma lata:  R$8,00\n  - 2) Guaraná                          - 6) Heineken long/zero:  R$14,00\n  - 3) Fanta                               - 7) Brahma 600ml:  R$16,00\n  - 4) Sprite                              - 8) Heineken/Original 600ml:  R$20,00\n\n0) Cancelar`))

                        }while (isNaN(alimentoSelecionado) || alimentoSelecionado < 0 || alimentoSelecionado > 8)

                            //?Verificando se o usuário decidiu cancelar para evitar perguntas desnecessárias
                            if(alimentoSelecionado != 0){

                                do{

                                    qtdAlimento = Number(prompt(`Quantas você vai querer?`))

                                }while(isNaN(qtdAlimento) || qtdAlimento < 1)
                            }

                            switch (alimentoSelecionado){

                                //? 4 cases para os refris por serem do mesmo valor
                                case 1:
                                case 2:
                                case 3:
                                case 4:

                                    //? o valor total sempre se atualiza e vai mostrando pro usuário o valor atual da compra e o valor total da comanda

                                    valorAlimento = 7 * qtdAlimento
                                    somaValores += valorAlimento
                                    alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)

                                    break

                                //brahma lata
                                case 5:

                                    valorAlimento = 8 * qtdAlimento
                                    somaValores += valorAlimento
                                    alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)

                                    break

                                //Longneck
                                case 6:
                                    valorAlimento = 14 * qtdAlimento
                                    somaValores += valorAlimento
                                    alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)

                                    break

                                //Brahma 600ml
                                case 7:
                                    valorAlimento = 16 * qtdAlimento
                                    somaValores += valorAlimento
                                    alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)

                                    break

                                // Hnk/Original 600ml
                                case 8:
                                    valorAlimento = 20 * qtdAlimento
                                    somaValores += valorAlimento
                                    alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)

                                    break
                                default:
                                    console.log('ERRO BEBIDAS')

                            }
                            
                            do{

                                opcaoRetorno = Number(prompt(`O que deseja fazer agora?\n\n1) Continuar em BEBIDAS\n2) Retornar para CARDÁRPIO\n3) Fechar a comanda e retornar ao menu`))

                            }while(isNaN(opcaoRetorno) || opcaoRetorno < 1 || opcaoRetorno > 3)
                    
                            if(opcaoRetorno == 3){

                                pedidoCardapioOpcao = 4

                            }
                            
                    

                        }while (opcaoRetorno != 2 && opcaoRetorno != 3 && alimentoSelecionado != 0)

                        break
                    case 2:

                        do{
                        
                        do{

                            alimentoSelecionado = Number(prompt(`--> PORÇÕES <--\n\n Pastéis:                                         5)Batata-frita: R$28,00\n  - 1) Queijo:  R$12,00                   6) Batata-frita com queijo: R$32,00\n  - 2) Carne: R$15,00                     7) Isca de robalo: R$70,00 \n  - 3) Frango: R$15,00                   8) Lula à milanesa: R$ 85,00\n  - 4) Camarão R$: 17,00               9) Camarão à milanesa: R$ 90,00\n\n0) Cancelar`))


                        }while (isNaN(alimentoSelecionado) || alimentoSelecionado < 0 || alimentoSelecionado > 9)
                            if(alimentoSelecionado != 0){

                                do{

                                    qtdAlimento = Number(prompt(`Quantas você vai querer?`))

                                }while(isNaN(qtdAlimento) || qtdAlimento < 1)
                            }

                            switch (alimentoSelecionado){
                                //Pastel de queijo
                                case 1:
                                    
                                    valorAlimento = 12 * qtdAlimento
                                    somaValores += valorAlimento
                                    alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)

                                    break
                                //Pastel de carne e frango
                                case 2:
                                case 3:
                                    
                                    valorAlimento = 15 * qtdAlimento
                                    somaValores += valorAlimento
                                    alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)

                                    break
                                //Pastel de camarão
                                case 4:

                                    valorAlimento = 17 * qtdAlimento
                                    somaValores += valorAlimento
                                    alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)

                                    break

                                //Batata-frita
                                case 5:

                                    valorAlimento = 28 * qtdAlimento
                                    somaValores += valorAlimento
                                    alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)

                                    break

                                //Batata-frita com queijo
                                case 6:
                                    valorAlimento = 32 * qtdAlimento
                                    somaValores += valorAlimento
                                    alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)
                                    break

                                //Isca de robalo
                                case 7:
                                    valorAlimento = 70 * qtdAlimento
                                    somaValores += valorAlimento
                                    alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)

                                    break

                                // Lula milanesa
                                case 8:
                                    valorAlimento = 85 * qtdAlimento
                                    somaValores += valorAlimento
                                    alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)

                                    break
                                //Camarão a milanesa
                                 case 9:
                                    valorAlimento = 90 * qtdAlimento
                                    somaValores += valorAlimento
                                    alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)

                                    break
                                default:
                                    console.log('ERRO PORÇÕES')

                            }
                            
                            do{

                                opcaoRetorno = Number(prompt(`O que deseja fazer agora?\n\n1) Continuar em PORÇÕES\n2) Retornar para CARDÁRPIO\n3) Fechar a comanda e retornar ao menu`))

                            }while(isNaN(opcaoRetorno) || opcaoRetorno < 1 || opcaoRetorno > 3)
                    
                            if(opcaoRetorno == 3){

                                pedidoCardapioOpcao = 4

                            }
                            
                    

                        }while (opcaoRetorno != 2 && opcaoRetorno != 3 && alimentoSelecionado != 0)

                        break

                    case 3:
                        do{
                        
                            do{
    
                                alimentoSelecionado = Number(prompt(`--> Almoço e pratos especiais  <--\n--> Todos acompanham guarnições <--\n\n1) Filé de peixe frito: R$110,00\n2) Porção da casa: R$165,00\n3) Porção mista R$185,00\n4) Camarão na moranga R$210,00\n5) Moqueca mista: R$220,00 \n\n0) Cancelar `))
    
    
                            }while (isNaN(alimentoSelecionado) || alimentoSelecionado < 0 || alimentoSelecionado > 5)
                                if(alimentoSelecionado != 0){
    
                                    do{
    
                                        qtdAlimento = Number(prompt(`Quantas você vai querer?`))
    
                                    }while(isNaN(qtdAlimento) || qtdAlimento < 1)
                                }
    
                                switch (alimentoSelecionado){
                                    //Filé de peixe frito
                                    case 1:
                                        
                                        valorAlimento = 110 * qtdAlimento
                                        somaValores += valorAlimento
                                        alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)
    
                                        break
                                    //Porção da casa
                                    case 2:
                                        
                                        valorAlimento = 165 * qtdAlimento
                                        somaValores += valorAlimento
                                        alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)
    
                                        break
                                    //Porção mista
                                    case 3:
    
                                        valorAlimento = 185 * qtdAlimento
                                        somaValores += valorAlimento
                                        alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)
    
                                        break
    
                                    //Camarão na moranga
                                    case 4:
    
                                        valorAlimento = 210 * qtdAlimento
                                        somaValores += valorAlimento
                                        alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)
    
                                        break
    
                                    //Moqueca mista
                                    case 5:
                                        valorAlimento = 220 * qtdAlimento
                                        somaValores += valorAlimento
                                        alert(`Perfeito!\n\nValor da compra: R$${valorAlimento}\n\nValor total da comanda: R$${somaValores} `)
                                        break

                                    default:
                                        console.log('ERRO PRATOS')
    
                                }
                                
                                do{
    
                                    opcaoRetorno = Number(prompt(`O que deseja fazer agora?\n\n1) Continuar em ALMOÇOS\n2) Retornar para CARDÁRPIO\n3) Fechar a comanda e retornar ao menu`))
    
                                }while(isNaN(opcaoRetorno) || opcaoRetorno < 1 || opcaoRetorno > 3)
                        
                                if(opcaoRetorno == 3){
    
                                    pedidoCardapioOpcao = 4
    
                                }
                                
                        
    
                            }while (opcaoRetorno != 2 && opcaoRetorno != 3 && alimentoSelecionado != 0)

                        break

                    




                }


            }while(isNaN(pedidoCardapioOpcao) || pedidoCardapioOpcao != 4)


            break
        case 3:
            if(mesaAberta == false){

                alert(`Nenhuma mesa está aberta para poder fechar`)
                break

            }else if (somaValores <= 0){

                alert('Consuma alguma coisa')
                break
            }else{

                taxaServico = somaValores * porcentagemGarcom / 100
                valorACobrar = somaValores + taxaServico

                do{

                    //? todas os valores sendo mostrados pro usuario
                    encerrarMesa = prompt(`MESA ${numeroMesa}\n\nValor consumado: R$${somaValores}\nTaxa de serviço (10%): R$${taxaServico}\n\nVALOR A PAGAR -->>> R$${valorACobrar}\n\nDigite 'Sim' se quiser encerrar a mesa ou 'Não' para manter a mesa aberta`).toUpperCase().trim()

                }while(encerrarMesa != `SIM` && encerrarMesa != `NÃO`)

                if(encerrarMesa == 'SIM'){

                    //? reset da mesa quando a compra foi confirmada
                    mesaAberta = false
                    somaValores = 0
                    alert('Muito obrigado por almoçar com a gente, volte sempre!')

                }else{

                    alert('Certo, a mesa vai continuar aberta')

                }
                

            }
            break
        case 4:
            if(mesaAberta == true){

                
                do{
                    //? confirmação de saida caso perceba que tem uma mesa aberta e deu missclick no botão de saída
                    confirmarSaida = prompt('Existe uma mesa aberta, deseja mesmo encerrar o programa? Todo o seu progresso salvo será perdido (Sim/Não)').toUpperCase().trim()

                }while(confirmarSaida != 'SIM' && confirmarSaida != 'NÃO')

                if(confirmarSaida == 'NÃO'){

                    menuOpcao = 0

                }

            }
            break
        
        default:
            console.log('ERRO MENU')


    }




}while(menuOpcao != 4)