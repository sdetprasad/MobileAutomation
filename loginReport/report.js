$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/InvLogin.feature");
formatter.feature({
  "name": "Login Functionality using Invalid credentials",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "UnSuccesfull login of user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@InvalidInputs"
    }
  ]
});
formatter.step({
  "name": "user is on application homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user navigates to account section",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the \"\u003cuserId\u003e\" and \"\u003cpassword\u003e\" and hits login",
  "keyword": "Then "
});
formatter.step({
  "name": "verify user unable to login and still on login page",
  "keyword": "And "
});
formatter.step({
  "name": "close the application",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "password"
      ]
    },
    {
      "cells": [
        "jack@gmail.com",
        "jack@123"
      ]
    },
    {
      "cells": [
        "harrywalsh@gmail.com",
        "walsh56"
      ]
    }
  ]
});
formatter.scenario({
  "name": "UnSuccesfull login of user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@InvalidInputs"
    }
  ]
});
formatter.step({
  "name": "user is on application homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "InvLoginSteps.user_is_on_application_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to account section",
  "keyword": "When "
});
formatter.match({
  "location": "InvLoginSteps.user_navigates_to_Account_Section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the \"jack@gmail.com\" and \"jack@123\" and hits login",
  "keyword": "Then "
});
formatter.match({
  "location": "InvLoginSteps.user_enters_the_and_and_hits_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify user unable to login and still on login page",
  "keyword": "And "
});
formatter.match({
  "location": "InvLoginSteps.verify_user_unable_to_login_and_still_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the application",
  "keyword": "And "
});
formatter.match({
  "location": "InvLoginSteps.close_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "UnSuccesfull login of user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@InvalidInputs"
    }
  ]
});
formatter.step({
  "name": "user is on application homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "InvLoginSteps.user_is_on_application_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to account section",
  "keyword": "When "
});
formatter.match({
  "location": "InvLoginSteps.user_navigates_to_Account_Section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the \"harrywalsh@gmail.com\" and \"walsh56\" and hits login",
  "keyword": "Then "
});
formatter.match({
  "location": "InvLoginSteps.user_enters_the_and_and_hits_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify user unable to login and still on login page",
  "keyword": "And "
});
formatter.match({
  "location": "InvLoginSteps.verify_user_unable_to_login_and_still_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the application",
  "keyword": "And "
});
formatter.match({
  "location": "InvLoginSteps.close_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/login.feature");
formatter.feature({
  "name": "Login functionality of ShopClues Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Functional"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the application Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "loginSteps.user_is_on_the_application_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid inputs provided",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Functional"
    },
    {
      "name": "@ValidInputs"
    }
  ]
});
formatter.step({
  "name": "user navigates to Account Section",
  "keyword": "When "
});
formatter.match({
  "location": "loginSteps.user_navigates_to_Account_Section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters credentials and hits Login",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.user_enters_credentials_and_hits_Login()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Failed to tap on element \u0027Object Repository/android.widget.TextView0 - Login\u0027 (Root cause: org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: socket hang up\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027PRASADLUNGARE\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {app: C:\\Users\\owner\\Downloads\\Sh..., appPackage: com.shopclues, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 52183, databaseEnabled: false, desired: {app: C:\\Users\\owner\\Downloads\\Sh..., autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 52183, deviceName: Xiaomi Redmi Note 7 Pro (An..., fullReset: true, newCommandTimeout: 1800, noReset: false, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 52181, udid: 2a10ca3f}, deviceApiLevel: 28, deviceManufacturer: Xiaomi, deviceModel: Redmi Note 7 Pro, deviceName: 2a10ca3f, deviceScreenDensity: 440, deviceScreenSize: 1080x2340, deviceUDID: 2a10ca3f, fullReset: true, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, noReset: false, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 80, systemPort: 52181, takesScreenshot: true, udid: 2a10ca3f, viewportRect: {height: 2051, left: 0, top: 80, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 48818f31-ad55-4631-8b97-a76858cc94ed\n*** Element info: {Using\u003d-android uiautomator, value\u003dnew UiSelector().className(\"android.widget.TextView\").text(\"Login\").resourceId(\"com.shopclues:id/tv_login\")}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElements(DefaultGenericMobileDriver.java:54)\r\n\tat io.appium.java_client.AppiumDriver.findElements(AppiumDriver.java:152)\r\n\tat io.appium.java_client.FindsByAndroidUIAutomator.findElementsByAndroidUIAutomator(FindsByAndroidUIAutomator.java:51)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileSearchEngine.findAndroidElements(MobileSearchEngine.java:152)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileSearchEngine.findWebElement(MobileSearchEngine.java:252)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileSearchEngine$findWebElement.call(Unknown Source)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword.findElement(MobileAbstractKeyword.groovy:84)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.doCall(TapKeyword.groovy:76)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.call(TapKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.tap(TapKeyword.groovy:86)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.execute(TapKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.tap(MobileBuiltInKeywords.groovy:577)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$tap$0.call(Unknown Source)\r\n\tat loginSteps.user_enters_credentials_and_hits_Login(LoginSteps.groovy:51)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:430)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:427)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:527)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat TC_login_all.run(TC_login_all:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:114)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:105)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1590682551975.run(TempTestCase1590682551975.groovy:25)\r\n)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.tap(TapKeyword.groovy:86)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.execute(TapKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.tap(MobileBuiltInKeywords.groovy:577)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$tap$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat loginSteps.user_enters_credentials_and_hits_Login(LoginSteps.groovy:51)\r\n\tat ✽.user enters credentials and hits Login(Include/features/login.feature:10)\r\nCaused by: org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: socket hang up\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027PRASADLUNGARE\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {app: C:\\Users\\owner\\Downloads\\Sh..., appPackage: com.shopclues, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 52183, databaseEnabled: false, desired: {app: C:\\Users\\owner\\Downloads\\Sh..., autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 52183, deviceName: Xiaomi Redmi Note 7 Pro (An..., fullReset: true, newCommandTimeout: 1800, noReset: false, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 52181, udid: 2a10ca3f}, deviceApiLevel: 28, deviceManufacturer: Xiaomi, deviceModel: Redmi Note 7 Pro, deviceName: 2a10ca3f, deviceScreenDensity: 440, deviceScreenSize: 1080x2340, deviceUDID: 2a10ca3f, fullReset: true, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, noReset: false, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 80, systemPort: 52181, takesScreenshot: true, udid: 2a10ca3f, viewportRect: {height: 2051, left: 0, top: 80, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 48818f31-ad55-4631-8b97-a76858cc94ed\n*** Element info: {Using\u003d-android uiautomator, value\u003dnew UiSelector().className(\"android.widget.TextView\").text(\"Login\").resourceId(\"com.shopclues:id/tv_login\")}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElements(DefaultGenericMobileDriver.java:54)\r\n\tat io.appium.java_client.AppiumDriver.findElements(AppiumDriver.java:152)\r\n\tat io.appium.java_client.FindsByAndroidUIAutomator.findElementsByAndroidUIAutomator(FindsByAndroidUIAutomator.java:51)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileSearchEngine.findAndroidElements(MobileSearchEngine.java:152)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileSearchEngine.findWebElement(MobileSearchEngine.java:252)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileSearchEngine$findWebElement.call(Unknown Source)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword.findElement(MobileAbstractKeyword.groovy:84)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.doCall(TapKeyword.groovy:76)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.call(TapKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.tap(TapKeyword.groovy:86)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.execute(TapKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.tap(MobileBuiltInKeywords.groovy:577)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$tap$0.call(Unknown Source)\r\n\tat loginSteps.user_enters_credentials_and_hits_Login(LoginSteps.groovy:51)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:430)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:427)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:527)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat TC_login_all.run(TC_login_all:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:114)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:105)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1590682551975.run(TempTestCase1590682551975.groovy:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify MyOrders section is present",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.verify_MyOrders_section_is_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "closes the application",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.closes_the_application()"
});
formatter.result({
  "status": "skipped"
});
});