package com.test.steps;

import com.test.screen.ScreenLogin;
import com.test.screen.Utils;
import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Quando;


public class LoginSteps {

    ScreenLogin login = new ScreenLogin();

    Utils utils = new Utils();

    @Dado("^que eu visualize o texto \"([^\"]*)\" no botão de login$")
    public void que_eu_visualize_o_texto_no_botão_de_login(String txt) throws NoSuchFieldException {
       // utils.scrollToTextAndroid("5552 - Lucas Dira");
        utils.validateTxt(login.btnLogin,txt);

    }

    @Dado("^que eu escreva as informações do usuário$")
    public void que_eu_escreva_as_informações_do_usuário() {
        for (int x = 0; x <=2; x++) {
            login.writeEmail();
        }
    }

    @Quando("^escrever os dados da senha com \"([^\"]*)\"$")
    public void escrever_os_dados_da_senha_com(String texto) {
        int i =1;
        while (i <=2 ) {
            login.writePass(texto);
            i++;
        }
    }

    @Dado("^que preencha o email com o usuario \"([^\"]*)\"$")
    public void que_preencha_o_email_com_o_usuario(String usuario) {
        login.writeEmails(usuario);
    }
}