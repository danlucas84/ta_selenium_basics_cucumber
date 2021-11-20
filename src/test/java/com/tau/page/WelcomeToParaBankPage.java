package com.tau.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class WelcomeToParaBankPage extends PageObject {

    @FindBy(css = "#headerPanel > ul.button > li.home")
    private WebElement homeIcon;

    @FindBy(css = "#headerPanel > ul.button > li.aboutus")
    private WebElement parentWithChildIcon;

    @FindBy(css ="#headerPanel > ul.button > li.contact")
    private WebElement envelopIcon;

    public WelcomeToParaBankPage(WebDriver driver) {
        super(driver);
    }

    public HomePage clickHomeIcon() {
        homeIcon.click();
        return new HomePage(driver);
    }

    public ParaSoftDemoWebsitePage clickParentWithChildIcon(){
        parentWithChildIcon.click();
        return new ParaSoftDemoWebsitePage(driver);
    }

    public CustomerCarePage clickEnvelopIcon() {
        envelopIcon.click();
        return new CustomerCarePage(driver);

    }

}
