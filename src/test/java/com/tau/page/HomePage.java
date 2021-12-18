package com.tau.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends MenuWelcomeToParaBankPage {

    @FindBy(name = "username")
    private WebElement usernameInput;

    @FindBy(name = "password")
    private WebElement passwordInput;

    @FindBy(css = "div.login > input.button")
    private WebElement loginButton;

    @FindBy(css = "//*[@id='loginPanel']/p[2]/a")
    private WebElement registerLeftMenuButton;

    @FindBy(css = "#rightPanel > div > div > h1")
    private WebElement accountOverviewHeader;

    @FindBy(css = "#rightPanel > ul.services > li.captionone")
    private WebElement atmServiceHeader;

    @FindBy(css = "#rightPanel > h1")
    private WebElement paraSoftDemoWebsiteTitleHeader;

    public HomePage(WebDriver driver) {
        super(driver); // super odnosi sie do klassy pageobject a driver jest zmienna typu web driver przekazywanan jako parametr konstruktora homepage przekazuje obiekt typu webdriver
    }


    public void enterUsernameInput(String username) {
        usernameInput.clear();
        usernameInput.sendKeys(username);
    }

    public void enterPasswordInput(String password) {

        passwordInput.clear();
        passwordInput.sendKeys(password);
    }

    public AccountOverviewPage clickLoginButton() {
        loginButton.click();
        return new AccountOverviewPage(driver);
    }


    public RegisterPage clickRegisterLeftMenuButton() {

        registerLeftMenuButton.click();
        return new RegisterPage(driver);
    }

    public String getAccountOverviewHeader() {

        return accountOverviewHeader.getText();
    }

    public String getAtmServiceHeader() {

        return atmServiceHeader.getText();
    }

}





