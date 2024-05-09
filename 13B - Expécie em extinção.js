//todo Elaborar um programa que alerte sobre os riscos de animais em extinção. O usuário deve digitar o nome da espécie e a sua população (total de indivíduos). Populações entre 200 e 500 indivíduos, são classificadas como "Espécie criticamente em perigo", populações entre 500 e 1000 indivíduos, são classificadas como "Espécie em perigo" e populações entre 1000 e 5000 indivíduos, são classificadas como "Espécie vulnerável!" 

let nomeEspecie, populacaoEspecie, especieCriticamentePerigo = 200, especieVulneravel = 1000

nomeEspecie = prompt(`Nome da espécie:`)
populacaoEspecie = Number(prompt('População da espécie:'))

if(populacaoEspecie < especieCriticamentePerigo){

    alert('Sua espécie está criticamente em perigo!!!')

}else if(populacaoEspecie >= especieVulneravel){

    alert('Sua espécie está vulnerável!')

}else{

    alert('Sua espécie está em perigo!!')

}