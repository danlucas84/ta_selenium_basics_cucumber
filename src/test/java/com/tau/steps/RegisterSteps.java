package com.tau.steps;

import com.tau.page.HomePage;
import com.tau.page.RegisterPage;
import com.tau.page.WelcomeAfterMakingRegisterPage;
import io.cucumber.java8.En;
import org.openqa.selenium.WebDriver;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

public class RegisterSteps implements En {

    // zadektlaoewac zmienna globalna login steps a nastepnie do tej zmiennej przypisac w konstruktorze parametr konstruktora
    private LoginSteps loginSteps;
    private WebDriver driver;
    private HomePage homePage;
    private RegisterPage registerPage;
    private WelcomeAfterMakingRegisterPage welcomeAfterMakingRegisterPage;


    public RegisterSteps(LoginSteps loginSteps, CommonSteps commonSteps) {




        When("I click register on the left menu", () -> {

            homePage = new HomePage(commonSteps.getDriver());
            registerPage = homePage.clickRegisterLeftMenuButton();


        });

        And("I fill form", (io.cucumber.datatable.DataTable dataTable) -> {
            List<Map<String, String>> maps = dataTable.asMaps(); // operowanie na datatable
            System.out.println(maps);
            Map<String, String> firstRowMap = maps.get(0); // pobranie z datatablw mapy z 1 wierszem

            // wyciagnac z wiersza mapy username

            String username = firstRowMap.get("Username");
            System.out.println(username);

            // do username dodac unikalny timestamp

            long timeStamp = System.currentTimeMillis();
            System.out.println(username + timeStamp);

            LocalDateTime nowTime = LocalDateTime.now();
            System.out.println(nowTime);
            System.out.println(username + nowTime);

            // ewentualnie formater do obcinania milisekund zrobic zminna globalna formater

            SimpleDateFormat CALENDAR_DATE_FORMAT = new SimpleDateFormat("yyyyMMdd'T'HHmm'00'");
            CALENDAR_DATE_FORMAT.format(nowTime);

            System.out.println(nowTime);
            System.out.println(username + nowTime);


        });

        And("I click register button in the form", () -> {

            welcomeAfterMakingRegisterPage = registerPage.clickRegisterButton();


        });
        Then("you can see text {string} and {string}", (String expectedWelcomeHeader , String expectedWelcomeTextMessage) -> {

            //String welcomeHeader ="Welcome dan"; zbedne do usuniecia

           // String expectedWelcomeHeader = "Welcome dan"; bo przekazane w parametrze w nawiasach

            //String welcomeTextMessage = "Your account was created successfully. You are now logged in"; zbedne do usniecia
            //String expectedWelcomeTextMessage = "Your account was created successfully. You are now logged in"; bo przekazane w parametrze w nawiasach

            assertThat(welcomeAfterMakingRegisterPage.getWelcomeHeader()).isEqualTo(expectedWelcomeHeader);
            assertThat(welcomeAfterMakingRegisterPage.getWelcomeTextMessage()).isEqualTo(expectedWelcomeTextMessage);
        });


    }
}