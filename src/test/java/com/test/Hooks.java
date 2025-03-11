package com.test;

import cucumber.api.java.Before;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.MalformedURLException;
import java.net.URL;

public class Hooks {

    private static AppiumDriver<?> driver;

    public  static String plataforma = "";

    public static AppiumDriver<?> validateDriver() throws MalformedURLException {

        plataforma = System.getProperty("plataforma");
        System.out.println("Sua plataforma é " + plataforma);

        if(plataforma.equals("android")) {
            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.setCapability("app", "C:\\Users\\PICHAU\\Documents\\Projetos\\appium-com-cucumber-avançado\\apps\\app-debug.apk");
            capabilities.setCapability("deviceName", "emulator-5554");
            capabilities.setCapability("platformName", "Android");
            driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);

        } else if (plataforma.equals("ios")){
            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.setCapability("app", "C:\\Users\\PICHAU\\Documents\\Projetos\\appium-com-cucumber-avançado\\apps\\app-debug.apk");
            capabilities.setCapability("deviceName", "emulator-5554");
            capabilities.setCapability("platformName", "IOS");
            driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);

        } else {
            System.out.println("Plataforma não encontrada , utilize android ou ios");
        }
        return driver;
    }

    public static AppiumDriver<?> getDriver(){
        return driver;
    }

    public static void quitDriver() {
        if(driver != null) {
            driver.quit();
        }
    }

    @Before
    public static void startProject() throws MalformedURLException {
        if (getDriver() != null){
            getDriver().launchApp();
        } else {
            validateDriver();
        }
    }
}