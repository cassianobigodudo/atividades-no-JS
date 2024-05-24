//todo: SCRUM é uma metodologia ágil de gerenciamento de projetos muito utilizada na área da tecnologia. Dentro do SCRUM, o planejamento é realizado através de 'sprints' que normalmente variam de 15 a 30 dias. Criar um programa onde o usuário deve digitar o tempo total do projeto em dias e o período das sprints. Após calculado o número de sprints (média), cadastrar para cada sprint um título e um objetivo.

let tempoTotalProjeto, periodoSprints, mediaSprints, tituloSprint, objetivoSprint
do{

    tempoTotalProjeto = Number(prompt('Digite o tempo total do projeto'))

}while(isNaN(tempoTotalProjeto) || tempoTotalProjeto <= 0)

do{

    periodoSprints = Number(prompt('Digite o período das sprints (de 15 a 30 dias)'))

}while(isNaN(periodoSprints) || periodoSprints < 15 || periodoSprints > 30)

mediaSprints = Math.floor(tempoTotalProjeto / periodoSprints)

console.log(mediaSprints)

for (i = 0; i < mediaSprints; i++) {
    
    tituloSprint = prompt(`Digite o título da sprint`)
    objetivoSprint = prompt(`Digite o objetivo da sprint`)
    
}


