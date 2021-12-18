package com.tau.runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(glue={"com.tau.steps"},
		features = "src/test/resources",
		//name ={"clicking envelop icon"},
		//dryRun = true, // pokaze metody ktore musi zaimplementowac // gdy chce uruchomic testy muze zakomentoac ta linijke
		plugin = { "pretty", "html:target/site/cucumber-pretty",
		"json:target/cucumber.json" })
public class RunCucumberTests {


}