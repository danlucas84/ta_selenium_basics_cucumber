package com.tau.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;
// dodac zmiennna z headerem ktora sprawdz za kazdym razem czy wyswietlil sie odpowieni header na stronie
// opieramy sie na wzorcu factory
public abstract class PageObject {


    protected WebDriver driver;
    private WebDriverWait wait;

    public PageObject(WebDriver driver) {
        this.driver = driver;

        PageFactory.initElements(driver, this);
        wait = new WebDriverWait(driver, 30, 1000);
    }
}

