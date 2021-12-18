package com.tau.steps;

import com.tau.config.WebDriverFactory;
import io.cucumber.java8.En;
import io.cucumber.java8.Scenario;
import org.openqa.selenium.WebDriver;

public class CommonSteps implements En {

    public WebDriver getDriver() {
        return driver;
    }

    private WebDriver driver;

    public CommonSteps() {
        Before("@scenario", scenario -> driver = WebDriverFactory.CHROME.create());
        After ("@scenario", () -> {
            driver.quit();
            driver.close();
        });
    }
}
