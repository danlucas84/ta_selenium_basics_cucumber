package com.tau.steps;

import com.tau.page.CustomerCarePage;
import com.tau.page.HomePage;
import com.tau.page.ParaSoftDemoWebsitePage;
import io.cucumber.java8.En;

import static org.assertj.core.api.Assertions.assertThat;

public class WelcomeToParaBankSteps implements En {

    private HomePage homePage;
    private ParaSoftDemoWebsitePage paraSoftDemoWebsitePage;
    private CustomerCarePage customerCarePage;
    // nowy scenariusz w testach = nowy obiekt

    // stworzyc bibiotek commons gdzie bedzie krok wrodzenia na strone glowna i logowanie oraz zamykanie browsera  co jest prekazywane do innych stepsow


    public WelcomeToParaBankSteps(LoginSteps loginSteps) {

        When("I click home icon", () -> {
            HomePage homePage = new HomePage(loginSteps.getDriver());
            homePage.clickHomeIcon();
        });
        Then("I can move back to main page", () -> {
            assertThat(homePage.getAtmServiceHeader()).isEqualTo("ATM Services");
        });


        When("I click parent with child icon", () -> {
            HomePage homePage = new HomePage(commonSteps.getDriver());
            paraSoftDemoWebsitePage = homePage.clickParentWithChildIcon();
        });

        Then("I can see ParaSoft Demo Website title", () -> {
            String expected = "ParaSoft Demo Website";
            assertThat(paraSoftDemoWebsitePage.getParaSoftDemoWebsiteTitleHeader()).isEqualTo(expected);
        });

        When("I click envelop icon", () -> {
            HomePage homePage = new HomePage(loginSteps.getDriver());
            customerCarePage = homePage.clickEnvelopIcon();
        });

        Then("I can see  Customer Care title", () -> {
            String expected = "Customer Care";
            assertThat(customerCarePage.getCustomerCareTitleHeader()).isEqualTo(expected);

        });

        And("Customer Care form to fill form with {string}, {string}, {string}, {string}", (String name, String email, String phone, String message) -> {
            customerCarePage.enterName(name);
            customerCarePage.enterEmail(email);
            customerCarePage.enterPhone(phone);
            customerCarePage.enterMessage(message);
        });

        And("I click send Message button", () -> {
            customerCarePage.clickSendToCustomerCareButton();
        });

        And("I can see Thank you {string} Title", (String name) -> {
            String expected = "Thank you" + name;
       // zrobic dla drugiego stringa assercje dla  A Customer Care Representative will be contacting you.";
            assertThat(customerCarePage.getCustomerCareThankYouMessage()).isEqualTo(expected);
        });
    }

}

