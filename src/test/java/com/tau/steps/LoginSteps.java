package com.tau.steps;

import com.tau.page.AccountOverviewPage;
import com.tau.page.HomePage;
import io.cucumber.java8.En;
import org.openqa.selenium.WebDriver;

// stworzyc klasa commonSteps classa Commmons w kteorej bedzie otwieranie przeglarki zamykanie ,

import static org.assertj.core.api.Assertions.assertThat;

public class LoginSteps implements En { // implemetuje wersje jezykowa
    //private WebDriver driver;
    private HomePage homePage;
    private AccountOverviewPage accountOverviewPage;

    public LoginSteps(CommonSteps commonSteps, WebDriver driver) {

        Given("I am in the login page of the Para Bank Application", () -> {
            //driver = WebDriverFactory.CHROME.create();
            //driver = WebDriverFactory.FIREFOX.create();
            commonSteps.getDriver().get("https://parabank.parasoft.com/parabank/index.htm");
        }); // coomonssteps.getdriver.get zamiast driver.get


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

    public WebDriver getDriver() {
        return driver;
    }
}
