package com.test.screen;

import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSFindBy;
import org.openqa.selenium.remote.RemoteWebElement;

public class ScreenLogin extends BaseScreen {

    @AndroidFindBy(id = "login_username")
    @iOSFindBy(accessibility = "login_username")
    private RemoteWebElement fieldEmail;

    @AndroidFindBy(id = "login_password")
    @iOSFindBy(accessibility = "login_password")
    private RemoteWebElement fieldpass;

    public void writeEmail(){
        fieldEmail.sendKeys("qazando@gmail.com");
    }

    public void writePass(String txt){
        fieldpass.sendKeys(txt);
    }

    public void writeEmails(String txt){
        fieldEmail.sendKeys(txt);
    }
}
