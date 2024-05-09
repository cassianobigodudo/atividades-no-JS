//todo Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a senha (password) "123". Pedir ao usuário para digitar username e password. Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!", caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens específicas para erro de username, de password ou de ambos). 

let loginAdmin = 'admin' , senhaAdmin = 123, loginUsuario, senhaUsuario

loginUsuario = prompt(`Usuário do roteador`)
senhaUsuario = prompt(`Senha do roteador`)

if(loginAdmin == loginUsuario && senhaAdmin == senhaUsuario){

    alert(`Login efetuado com sucesso`)

}else if (loginAdmin != loginUsuario && senhaAdmin == senhaUsuario ){

    alert(`Nome de usuário incorreto`)

}else if(senhaAdmin != senhaUsuario && loginAdmin == loginUsuario){

    alert('Senha de usuário incorreta')

}else{

    alert('Usuário e senha incorretas')

}