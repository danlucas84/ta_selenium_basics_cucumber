package com.tau.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RegisterPage extends PageObject {

    @FindBy(css = "//*[@id='loginPanel']/p[2]/a")
    private WebElement registerLeftMenuButton;

    @FindBy(css = "#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input")
    private WebElement registerButton;


    public RegisterPage(WebDriver driver) {
        super(driver);
    }


    public RegisterPage clickRegisterLeftMenuButton() {
        registerLeftMenuButton.click();
        return new RegisterPage(driver);
    }

    public WelcomeAfterMakingRegisterPage clickRegisterButton() {
        registerButton.click();
        return new WelcomeAfterMakingRegisterPage(driver);

    }

}
