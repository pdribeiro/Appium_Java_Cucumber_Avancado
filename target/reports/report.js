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
  "duration": 5738688000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login com sucesso",
  "description": "",
  "id": "login-de-usuario-melhoria-de-cenário-bonito;login-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 6,
  "name": "que eu escreva as informações do usuário",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "escrever os dados da senha com \"123456\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.que_eu_escreva_as_informações_do_usuário()"
});
formatter.result({
  "duration": 1080540200,
  "status": "passed"
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
  "duration": 1069059300,
  "status": "passed"
});
});