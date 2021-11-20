$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "  In order to do internet banking\n  As a valid Para Bank customer\n  I want to login successfully",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login Successful scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter valid \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "click login",
  "keyword": "And "
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "\"autotester\"",
        "\"password\""
      ]
    },
    {
      "cells": [
        "\"tautester\"",
        "\"password\""
      ]
    },
    {
      "cells": [
        "dan",
        "test"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Successful scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:23)"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d95.0.4638.69)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-5F9RKDF\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.3\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00500C43+2493507]\n\tOrdinal0 [0x0049A4B1+2073777]\n\tOrdinal0 [0x003A2608+1058312]\n\tOrdinal0 [0x00395A34+1006132]\n\tOrdinal0 [0x00395676+1005174]\n\tOrdinal0 [0x00394D48+1002824]\n\tOrdinal0 [0x00393EDD+999133]\n\tOrdinal0 [0x00394196+999830]\n\tOrdinal0 [0x00393A85+998021]\n\tOrdinal0 [0x0039E714+1042196]\n\tOrdinal0 [0x00393A41+997953]\n\tOrdinal0 [0x00394966+1001830]\n\tOrdinal0 [0x00393EDD+999133]\n\tOrdinal0 [0x00394196+999830]\n\tOrdinal0 [0x00393A85+998021]\n\tOrdinal0 [0x0039C733+1034035]\n\tOrdinal0 [0x00393A41+997953]\n\tOrdinal0 [0x00394966+1001830]\n\tOrdinal0 [0x00393EDD+999133]\n\tOrdinal0 [0x00394196+999830]\n\tOrdinal0 [0x00393A85+998021]\n\tOrdinal0 [0x0039A579+1025401]\n\tOrdinal0 [0x00393A41+997953]\n\tOrdinal0 [0x00394966+1001830]\n\tOrdinal0 [0x00393EDD+999133]\n\tOrdinal0 [0x00394196+999830]\n\tOrdinal0 [0x00393A85+998021]\n\tOrdinal0 [0x003998FC+1022204]\n\tOrdinal0 [0x00393A41+997953]\n\tOrdinal0 [0x00394966+1001830]\n\tOrdinal0 [0x00393EDD+999133]\n\tOrdinal0 [0x00394196+999830]\n\tOrdinal0 [0x00393A85+998021]\n\tOrdinal0 [0x0038F72D+980781]\n\tOrdinal0 [0x00393A41+997953]\n\tOrdinal0 [0x003937E0+997344]\n\tOrdinal0 [0x00393589+996745]\n\tOrdinal0 [0x003A3820+1062944]\n\tOrdinal0 [0x003EAED9+1355481]\n\tOrdinal0 [0x003E9B7A+1350522]\n\tOrdinal0 [0x003E580B+1333259]\n\tOrdinal0 [0x003C2314+1188628]\n\tOrdinal0 [0x003C316F+1192303]\n\tGetHandleVerifier [0x00687BF6+1548950]\n\tGetHandleVerifier [0x0073461C+2256060]\n\tGetHandleVerifier [0x0058C13B+518107]\n\tGetHandleVerifier [0x0058B1E0+514176]\n\tOrdinal0 [0x0049F53D+2094397]\n\tOrdinal0 [0x004A3418+2110488]\n\tOrdinal0 [0x004A3552+2110802]\n\tOrdinal0 [0x004ACE81+2150017]\n\tBaseThreadInitThunk [0x76F8FA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x77837A9E+286]\n\tRtlGetAppContainerNamedObjectPath [0x77837A6E+238]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.tau.config.WebDriverFactory$1.create(WebDriverFactory.java:15)\r\n\tat com.tau.steps.LoginSteps.lambda$new$0(LoginSteps.java:24)\r\n\tat ✽.I am in the login page of the Para Bank Application(file:///C:/CucumberParaBankTests/ta_selenium_basics_cucumber/src/test/resources/Login.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter valid \"autotester\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:29)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click login",
  "keyword": "And "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:37)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:42)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login Successful scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"tautester\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:29)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login",
  "keyword": "And "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:37)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:42)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Successful scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid dan and test",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click login",
  "keyword": "And "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:37)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:42)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login Successful - Inline Parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid credentials username \"dan\" and password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:53)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login",
  "keyword": "And "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:37)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"div.login \u003e input.button\"}\n  (Session info: chrome\u003d95.0.4638.69)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-5F9RKDF\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.69, chrome: {chromedriverVersion: 95.0.4638.69 (6a1600ed572fe..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:53818}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 14e13b69651e633ae443d1c4c6ec32cd\n*** Element info: {Using\u003dcss selector, value\u003ddiv.login \u003e input.button}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy12.click(Unknown Source)\r\n\tat com.tau.page.HomePage.clickLoginButton(HomePage.java:42)\r\n\tat com.tau.steps.LoginSteps.lambda$new$2(LoginSteps.java:38)\r\n\tat ✽.click login(file:///C:/CucumberParaBankTests/ta_selenium_basics_cucumber/src/test/resources/Login.feature:30)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:42)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login Unsuccessful",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter invalid credentials username \"autotester\" and password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:60)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login",
  "keyword": "And "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:37)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"div.login \u003e input.button\"}\n  (Session info: chrome\u003d95.0.4638.69)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-5F9RKDF\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.69, chrome: {chromedriverVersion: 95.0.4638.69 (6a1600ed572fe..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:53838}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e4573d5541f6408c784e4de63943ff9f\n*** Element info: {Using\u003dcss selector, value\u003ddiv.login \u003e input.button}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy12.click(Unknown Source)\r\n\tat com.tau.page.HomePage.clickLoginButton(HomePage.java:42)\r\n\tat com.tau.steps.LoginSteps.lambda$new$2(LoginSteps.java:38)\r\n\tat ✽.click login(file:///C:/CucumberParaBankTests/ta_selenium_basics_cucumber/src/test/resources/Login.feature:37)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should not be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:67)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Register.feature");
formatter.feature({
  "name": "Register Functionality",
  "description": "  In order to do internet banking\n  As a valid Para Bank customer\n  I want to register account successfully",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register Successful",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.step({
  "name": "I click register on the left menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.RegisterSteps.\u003cinit\u003e(RegisterSteps.java:30)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat java.base/java.util.Objects.requireNonNull(Objects.java:221)\r\n\tat org.openqa.selenium.support.ui.FluentWait.\u003cinit\u003e(FluentWait.java:106)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:85)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:64)\r\n\tat com.tau.page.PageObject.\u003cinit\u003e(PageObject.java:18)\r\n\tat com.tau.page.HomePage.\u003cinit\u003e(HomePage.java:25)\r\n\tat com.tau.steps.RegisterSteps.lambda$new$0(RegisterSteps.java:32)\r\n\tat ✽.I click register on the left menu(file:///C:/CucumberParaBankTests/ta_selenium_basics_cucumber/src/test/resources/Register.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I fill form",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.tau.steps.RegisterSteps.\u003cinit\u003e(RegisterSteps.java:38)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click register button in the form",
  "keyword": "And "
});
formatter.match({
  "location": "com.tau.steps.RegisterSteps.\u003cinit\u003e(RegisterSteps.java:68)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "you can see text \"Welcome dan\" and \"Your account was created successfully. You are now logged in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.RegisterSteps.\u003cinit\u003e(RegisterSteps.java:74)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/WelcomeToParaBank.feature");
formatter.feature({
  "name": "Welcome to ParaBank - checking if button / are clickable",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "clicking home icon",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click home icon",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I can move back to main page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Page is reload",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "clicking parent with child icon",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click parent with child icon",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I can see ParaSoft Demo Website title",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "clicking envelop icon",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click envelop icon",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I can see  Customer Care title",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Customer Care form to fill form",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});