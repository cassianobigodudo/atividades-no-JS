//todo Na volta as aulas cada aluno(a) ganhará 2 bombons (1 para si e 1 para os pais), além de 1 bombom para o(a) professor(a). Faça um programa no qual seja digitado a quantidade de alunos da turma e mostrando quantos bombons no total devem ser comprados.

let bombomPorAluno = 2, bombomPorProfessor = 1, qtdBomboms, qtdAlunos

qtdAlunos = Number(prompt(`Quantidade de alunos na sala`))

qtdBomboms = (qtdAlunos * bombomPorAluno) + bombomPorProfessor

alert(`Você vai precisar comprar ${qtdBomboms} bomboms`)
