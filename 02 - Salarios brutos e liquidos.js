//2) Pergunte ao usuário o salário bruto e calcule o salário líquido, considerando 
//um desconto de 20% para impostos.

let salarioBruto, salarioLiquido, descontoImpostos = 100, multiplicacaoSalario

    descontoImpostos = descontoImpostos - 20

    salarioBruto = Number(prompt("Digite seu salário bruto: "))

    multiplicacaoSalario = salarioBruto * descontoImpostos
    salarioLiquido = multiplicacaoSalario / 100

    alert(`O seu salário bruto de R$${salarioBruto}, e com os descontos de 20%, seu salário líquido fica R$${salarioLiquido} `)

