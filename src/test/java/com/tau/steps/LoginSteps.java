package com.tau.steps;

import com.tau.config.WebDriverFactory;
import com.tau.page.AccountOverviewPage;
import com.tau.page.HomePage;
import io.cucumber.java8.En;
import net.bytebuddy.pool.TypePool;
import org.assertj.core.api.Assert;
import org.openqa.selenium.WebDriver;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

public class LoginSteps implements En { // implemetuje wersje jezykowa
    private WebDriver driver;
    private HomePage homePage;
    private AccountOverviewPage accountOverviewPage;

    public LoginSteps() {

        Given("I am in the login page of the Para Bank Application", () -> {
            driver = WebDriverFactory.CHROME.create();
            driver.get("https://parabank.parasoft.com/parabank/index.htm");
        });


        When("I enter valid {string} and {string}", (String username, String password) -> {
            homePage = new HomePage(driver);
            homePage.enterUsernameInput(username);
            homePage.enterPasswordInput(password);


        });

        And("^click login$", () -> {
            accountOverviewPage = homePage.clickLoginButton(); // przpisanie waryosci zwracanej fukcji do zmienne accountoverviewpage
           // homePage.clickLoginButton() = accountOverviewPage;  zle podejscie nie moozna przupisac wartosci do ffukxcji
        });

        Then("I should be taken to the Overview page", () -> {
            String expectedAccountOverviewHeader = "Accounts Overview";
            String expectedCurrentUrl = "https://parabank.parasoft.com/parabank/overview.htm";
            //expectedAccountOverviewHeader = accountOverviewPage.getAccountOverviewHeader(); zle bo nadpisje tutaj wartosc inicjalna text ktory podalem jako expected
            assertThat(driver.getCurrentUrl()).isEqualTo(expectedCurrentUrl);
            assertThat(accountOverviewPage.getAccountOverviewHeader()).isEqualTo(expectedAccountOverviewHeader);
        });
//            List<List<String>> lists = dataTable.asList(String.class);
//            System.out.println(lists);


        When("I enter valid credentials username {string} and password {string}", (String username, String password) -> {
            homePage = new HomePage(driver);
            homePage.enterUsernameInput(username);
            homePage.enterPasswordInput(password);
            accountOverviewPage = homePage.clickLoginButton();
        });

        When("I enter invalid credentials username {string} and password {string}", (String username, String password) -> {
            homePage = new HomePage(driver);
            homePage.enterUsernameInput(username);
            homePage.enterPasswordInput(password);
            accountOverviewPage = homePage.clickLoginButton();
        });

        Then("I should not be taken to the Overview page", () -> {

            String expectedAccountOverviewHeader = "Accounts Overview";
            String expectedCurrentUrl = "https://parabank.parasoft.com/parabank/overview.htm";

            assertThat(driver.getCurrentUrl()).isNotEqualTo(expectedCurrentUrl);
            assertThat(accountOverviewPage.getAccountOverviewHeader()).isNotEqualTo(expectedAccountOverviewHeader);
        });








    }
}
