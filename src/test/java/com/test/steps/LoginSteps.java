package com.test.steps;

import com.test.screen.ScreenLogin;
import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Quando;

public class LoginSteps {

    ScreenLogin login = new ScreenLogin();

    @Dado("^que eu escreva as informações do usuário$")
    public void que_eu_escreva_as_informações_do_usuário() {
            login.writeEmail();
    }

    @Quando("^escrever os dados da senha com \"([^\"]*)\"$")
    public void escrever_os_dados_da_senha_com(String texto) {
        login.writePass(texto);
    }

    @Dado("^que preencha o email com o usuario \"([^\"]*)\"$")
    public void que_preencha_o_email_com_o_usuario(String usuario) {
        login.writeEmails(usuario);
    }
}