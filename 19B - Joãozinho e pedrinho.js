//todo Joãozinho mede 1,75m de altura e cresce 1 cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3 cm por ano. Faça um programa que calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho.

let alturaJoaozinho = 1.75, alturaPedrinho = 1.60, crescimentoJoaozinho = 0.01, crescimentoPedrinho = 0.03, anosPassando = 0
while(alturaJoaozinho > alturaPedrinho){

    alturaJoaozinho = alturaJoaozinho + crescimentoJoaozinho
    alturaPedrinho = alturaPedrinho + crescimentoPedrinho
    anosPassando++
    

}

alert(`Pedrinho será mais alto que Joãozinho em ${anosPassando} anos`)