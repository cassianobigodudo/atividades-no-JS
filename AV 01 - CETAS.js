//todo: O CETAS (Centro de Triagem de Animais Silvestres) está com processo seletivo de integrantes para as suas equipes. Criar um sistema que receba os dados do candidato (nome, idade, formação e cidade) para sinalizar se ele pode concorrer às vagas. Após receber os dados, mostrar o nome do candidato e mensagem para qual tipo de vaga o candidato está apto a concorrer. Caso não esteja apto a concorrer a nenhuma das duas categorias de vagas, mostrar mensagem de "Não apto a concorrer".

//todo: Vaga para Equipe de Resgate -> O candidato deve ter de 25 a 50 anos, possuir formação em "Biologia" ou "Ecologia" e residir em Florianópolis.
//todo: Vaga para Equipe de Tratamento -> O candidato deve ter de 22 a 60 anos, possuir formação em "Veterinária" e residir em Florianópolis.

let nomeUsuario, idadeUsuario, formacaoUsuario, cidadeUsuario

nomeUsuario = prompt('Digite o seu nome').toUpperCase().trim()
idadeUsuario = Number(prompt('Digite a sua idade'))
formacaoUsuario = prompt('Digite a sua formação (sem acentos)').toUpperCase().trim()
cidadeUsuario = prompt('Digite a sua cidade (sem acentos)').toUpperCase().trim()

if (idadeUsuario < 22 || idadeUsuario > 60){

    alert(nomeUsuario + ', você não está apto a concorrer (Idade fora dos parâmetros)')

}else if (cidadeUsuario !== 'FLORIANOPOLIS'){

    alert(nomeUsuario + ', você não está apto a concorrer (Cidade inválida)')

}else if (idadeUsuario >= 22 && idadeUsuario <= 60 && formacaoUsuario === 'VETERINARIA' ){

    alert(nomeUsuario + ', você está apto a concorrer pelas vagas de equipe de tratamento! ')

}else if(idadeUsuario >= 25 && idadeUsuario <= 50){

    if(formacaoUsuario === 'BIOLOGIA' || formacaoUsuario === 'ECOLOGIA'){

        alert(nomeUsuario + ', você está apto a concorrer pelas vagas de equipe de resgate!')

    }else{

        alert(nomeUsuario + ', você não está apto a concorrer (Não há vagas para o seu ramo)')

    }

}else{

    alert(nomeUsuario + ', você não está apto a concorrer (Não há vagas para o seu ramo)')

}

