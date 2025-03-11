#language: pt

Funcionalidade: Login de Usuario Melhoria de cenário bonito

  Contexto: logar no app
    Dado que eu escreva as informações do usuário

  @teste
  Cenário: Login com sucesso
    Quando escrever os dados da senha com "123456"

  @teste-1
  Esquema do Cenário: Login com sucesso
    Dado que eu visualize o texto "CONTINUAR" no botão de login
    Dado que preencha o email com o usuario "<usuario>"
    Quando escrever os dados da senha com "<senha>"
    Exemplos:
      |senha  |usuario|
      |123456 |pedro@gmail.com|
      |1234567|pedro@hotmail.com|
      |1234568|pedro@uol.com    |