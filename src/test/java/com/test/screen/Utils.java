package com.test.screen;

import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.remote.RemoteWebElement;

import static com.test.Hooks.getDriver;

public class Utils {

    public void validateTxt(RemoteWebElement element, String txt){
        String texto = element.getText();
        assert texto.equals(txt);

    }

    public void scrollToTextAndroid(String txt) throws NoSuchFieldException {

        try{
            ((AndroidDriver) getDriver()).findElementByAndroidUIAutomator(
                    "new UiScrollable(new UiSelector().scrollable(true).instance(0))"
                            + ".scrollIntoView(new UiSelector().text(\"" + txt + "\").instance(0))"
            );        } catch (Exception e){
            throw new NoSuchFieldException("Não encontrado"+ e);

        }

    }
}
