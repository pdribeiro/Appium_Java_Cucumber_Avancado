$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login de Usuario Melhoria de cenário bonito",
  "description": "",
  "id": "login-de-usuario-melhoria-de-cenário-bonito",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 5548603900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "logar no app",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que eu escreva as informações do usuário",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_eu_escreva_as_informações_do_usuário()"
});
formatter.result({
  "duration": 1113477000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login com sucesso",
  "description": "",
  "id": "login-de-usuario-melhoria-de-cenário-bonito;login-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 8,
      "name": "@teste"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "escrever os dados da senha com \"123456\"",
  "keyword": "Quando "
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 32
    }
  ],
  "location": "LoginSteps.escrever_os_dados_da_senha_com(String)"
});
formatter.result({
  "duration": 1057757300,
  "status": "passed"
});
});