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
formatter.scenarioOutline({
  "line": 13,
  "name": "Login com sucesso",
  "description": "",
  "id": "login-de-usuario-melhoria-de-cenário-bonito;login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 12,
      "name": "@teste-1"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "que eu visualize o texto \"CONTINUAR\" no botão de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "que preencha o email com o usuario \"\u003cusuario\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "escrever os dados da senha com \"\u003csenha\u003e\"",
  "keyword": "Quando "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-de-usuario-melhoria-de-cenário-bonito;login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "senha",
        "usuario"
      ],
      "line": 18,
      "id": "login-de-usuario-melhoria-de-cenário-bonito;login-com-sucesso;;1"
    },
    {
      "cells": [
        "123456",
        "pedro@gmail.com"
      ],
      "line": 19,
      "id": "login-de-usuario-melhoria-de-cenário-bonito;login-com-sucesso;;2"
    },
    {
      "cells": [
        "1234567",
        "pedro@hotmail.com"
      ],
      "line": 20,
      "id": "login-de-usuario-melhoria-de-cenário-bonito;login-com-sucesso;;3"
    },
    {
      "cells": [
        "1234568",
        "pedro@uol.com"
      ],
      "line": 21,
      "id": "login-de-usuario-melhoria-de-cenário-bonito;login-com-sucesso;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 5753150500,
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
  "duration": 2293759699,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login com sucesso",
  "description": "",
  "id": "login-de-usuario-melhoria-de-cenário-bonito;login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 12,
      "name": "@teste-1"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "que eu visualize o texto \"CONTINUAR\" no botão de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "que preencha o email com o usuario \"pedro@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "escrever os dados da senha com \"123456\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.match({
  "arguments": [
    {
      "val": "CONTINUAR",
      "offset": 26
    }
  ],
  "location": "LoginSteps.que_eu_visualize_o_texto_no_botão_de_login(String)"
});
formatter.result({
  "duration": 557761900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pedro@gmail.com",
      "offset": 36
    }
  ],
  "location": "LoginSteps.que_preencha_o_email_com_o_usuario(String)"
});
formatter.result({
  "duration": 626226999,
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
  "duration": 1135362301,
  "status": "passed"
});
formatter.before({
  "duration": 1523735500,
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
  "duration": 3342558701,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login com sucesso",
  "description": "",
  "id": "login-de-usuario-melhoria-de-cenário-bonito;login-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 12,
      "name": "@teste-1"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "que eu visualize o texto \"CONTINUAR\" no botão de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "que preencha o email com o usuario \"pedro@hotmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "escrever os dados da senha com \"1234567\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.match({
  "arguments": [
    {
      "val": "CONTINUAR",
      "offset": 26
    }
  ],
  "location": "LoginSteps.que_eu_visualize_o_texto_no_botão_de_login(String)"
});
formatter.result({
  "duration": 516386000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pedro@hotmail.com",
      "offset": 36
    }
  ],
  "location": "LoginSteps.que_preencha_o_email_com_o_usuario(String)"
});
formatter.result({
  "duration": 128823600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567",
      "offset": 32
    }
  ],
  "location": "LoginSteps.escrever_os_dados_da_senha_com(String)"
});
formatter.result({
  "duration": 1140083100,
  "status": "passed"
});
formatter.before({
  "duration": 1551323801,
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
  "duration": 3349224400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login com sucesso",
  "description": "",
  "id": "login-de-usuario-melhoria-de-cenário-bonito;login-com-sucesso;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 12,
      "name": "@teste-1"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "que eu visualize o texto \"CONTINUAR\" no botão de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "que preencha o email com o usuario \"pedro@uol.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "escrever os dados da senha com \"1234568\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.match({
  "arguments": [
    {
      "val": "CONTINUAR",
      "offset": 26
    }
  ],
  "location": "LoginSteps.que_eu_visualize_o_texto_no_botão_de_login(String)"
});
formatter.result({
  "duration": 556786600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pedro@uol.com",
      "offset": 36
    }
  ],
  "location": "LoginSteps.que_preencha_o_email_com_o_usuario(String)"
});
formatter.result({
  "duration": 627950801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234568",
      "offset": 32
    }
  ],
  "location": "LoginSteps.escrever_os_dados_da_senha_com(String)"
});
formatter.result({
  "duration": 2114436699,
  "status": "passed"
});
});