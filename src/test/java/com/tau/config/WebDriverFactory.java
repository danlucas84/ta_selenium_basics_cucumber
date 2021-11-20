package com.tau.config;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public enum WebDriverFactory {

    CHROME {
        @Override
        public WebDriver create() {
            WebDriverManager.chromedriver().setup(); // ladowanie drivera do claspath java
            return new ChromeDriver(); // unicjalizowanie przegadarki za pomoca bezargumentowego konstruktora
        }
    },
    FIREFOX {
        @Override
        public WebDriver create() {
            WebDriverManager.firefoxdriver().setup(); // ladowanie drivera do claspath java
            return new FirefoxDriver();
        }
    },
    EDGE {
        @Override
        public WebDriver create() {
            WebDriverManager.edgedriver().setup();
            return new EdgeDriver();
        }
    };

    public abstract WebDriver create();



}
