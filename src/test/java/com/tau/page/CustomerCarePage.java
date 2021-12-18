package com.tau.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CustomerCarePage extends PageObject {

    @FindBy(css = "#rightPanel > h1")
    private WebElement customerCareTitleHeader;

    @FindBy(css = "#name")
    private WebElement nameInput;
    @FindBy(css = "#email")
    private WebElement emailInput;
    @FindBy(css = "#phone")
    private WebElement phoneInput;
    @FindBy(xpath = "//textarea[@id='message']")
    private WebElement messageTextArea;

    @FindBy(xpath = "//tbody/tr[5]/td[2]/input[1]")
    private WebElement sendToCustomerCareButton;

    @FindBy(xpath ="//p[@xpath='1']")
    private WebElement thankYouMessage;


    public CustomerCarePage(WebDriver driver) {
        super(driver);
    }

    public String getCustomerCareTitleHeader() {
        return customerCareTitleHeader.getText();
    }

    public void enterName(String name) {
        //metoda void tutaj bo nie zwracam wartosci a tylko wprowadzam wartosc

        nameInput.clear();
        nameInput.sendKeys(name);

    }


    public void enterEmail(String email) {
        //metoda void puta bo nie zwracam wartosci a tylko wprowadzam wartosc

        emailInput.clear();
        emailInput.sendKeys(email);
    }

    public void enterPhone(String phone){
        phoneInput.clear();
        phoneInput.sendKeys(phone);
    }

    public void enterMessage(String message){
        messageTextArea.clear();
        messageTextArea.sendKeys(message);

    }

    public CustomerCarePage clickSendToCustomerCareButton() {
        sendToCustomerCareButton.click();
        return new CustomerCarePage(driver);
    }

    public String getCustomerCareThankYouMessage() {
        return thankYouMessage.getText();
    }




}


