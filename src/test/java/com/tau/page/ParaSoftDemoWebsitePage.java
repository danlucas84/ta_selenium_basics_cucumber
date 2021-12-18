package com.tau.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ParaSoftDemoWebsitePage extends PageObject{

    @FindBy(css = "#rightPanel > h1")
    private WebElement paraSoftDemoWebsiteTitleHeader;


    public ParaSoftDemoWebsitePage(WebDriver driver) {
        super(driver);
    }

    public String getParaSoftDemoWebsiteTitleHeader(){
        return paraSoftDemoWebsiteTitleHeader.getText();
    }

}
