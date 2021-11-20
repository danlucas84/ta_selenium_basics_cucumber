package com.tau.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
// zad  stworzyc akstrakcyjna kalsse menu  ktora dedziczy po page object a nastepnie kazzdy page na ktorym jest menu dziedziczy po kalsie abstrakcyjnej menu
// jest to do reuzywalnosci elementow menu
public class AccountOverviewPage extends PageObject{

    @FindBy(css = "div.login > input.button")
    private WebElement loginButton;

    @FindBy(css = "#rightPanel > div > div > h1")
    private WebElement accountOverviewHeader;

    public AccountOverviewPage(WebDriver driver) {
        super(driver);
    }

    public String getAccountOverviewHeader() {

        return accountOverviewHeader.getText();
    }


}
