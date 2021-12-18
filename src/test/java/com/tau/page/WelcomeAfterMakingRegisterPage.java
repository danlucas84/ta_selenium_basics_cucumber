package com.tau.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class WelcomeAfterMakingRegisterPage extends PageObject {

    @FindBy(css = "#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input")
    private WebElement registerButton;

    @FindBy(css = "#rightPanel > h1")
    private WebElement welcomeHeader;

    @FindBy(css = "#rightPanel > p")
    private WebElement welcomeTextMessage;

    public WelcomeAfterMakingRegisterPage(WebDriver driver) {
        super(driver);

    }

    public WelcomeAfterMakingRegisterPage clickRegisterButton() {
        registerButton.click();
        return new WelcomeAfterMakingRegisterPage(driver);
    }

    // napisz 2 metody ktore zwracaja stringa getWelcomeHeader get WelcomeMessage

    public String getWelcomeHeader() {

        return welcomeHeader.getText();
    }

    public String getWelcomeTextMessage() {

        return welcomeTextMessage.getText();
    }

}

//    public String getWelcomeTextMessage() {
//        String text = welcomeTextMessage.getText();
//        return text;



