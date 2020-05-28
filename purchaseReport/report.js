$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/flipkartOrder.feature");
formatter.feature({
  "name": "Placing order through Flipkart Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FuntionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Purchasing of smartphone using parameterization",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addToCart"
    }
  ]
});
formatter.step({
  "name": "user has opended Flipkart application",
  "keyword": "Given "
});
formatter.step({
  "name": "user navigates to categories-electronics-mobile",
  "keyword": "When "
});
formatter.step({
  "name": "user search for \"\u003cmodel\u003e\" smartphone",
  "keyword": "Then "
});
formatter.step({
  "name": "user submits \"\u003cpinCode\u003e\" for delivery and adds to cart",
  "keyword": "And "
});
formatter.step({
  "name": "user navigates to cart",
  "keyword": "And "
});
formatter.step({
  "name": "user closes the application",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "model",
        "pinCode"
      ]
    },
    {
      "cells": [
        "apple iphone xr 128gb",
        "570027"
      ]
    },
    {
      "cells": [
        "apple iphone xr 128gb",
        "570727"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Purchasing of smartphone using parameterization",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FuntionalTest"
    },
    {
      "name": "@addToCart"
    }
  ]
});
formatter.step({
  "name": "user has opended Flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "flipkartSteps.user_has_opended_Flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to categories-electronics-mobile",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartSteps.user_navigates_to_categories_electronics_mobile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for \"apple iphone xr 128gb\" smartphone",
  "keyword": "Then "
});
formatter.match({
  "location": "flipkartSteps.user_search_for_smartphone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user submits \"570027\" for delivery and adds to cart",
  "keyword": "And "
});
formatter.match({
  "location": "flipkartSteps.user_submits_for_delivery_and_adds_to_cart(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to cart",
  "keyword": "And "
});
formatter.match({
  "location": "flipkartSteps.user_navigates_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the application",
  "keyword": "And "
});
formatter.match({
  "location": "flipkartSteps.user_closes_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Purchasing of smartphone using parameterization",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FuntionalTest"
    },
    {
      "name": "@addToCart"
    }
  ]
});
formatter.step({
  "name": "user has opended Flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "flipkartSteps.user_has_opended_Flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to categories-electronics-mobile",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartSteps.user_navigates_to_categories_electronics_mobile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for \"apple iphone xr 128gb\" smartphone",
  "keyword": "Then "
});
formatter.match({
  "location": "flipkartSteps.user_search_for_smartphone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user submits \"570727\" for delivery and adds to cart",
  "keyword": "And "
});
formatter.match({
  "location": "flipkartSteps.user_submits_for_delivery_and_adds_to_cart(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Failed to tap on element \u0027Object Repository/FlipkartObjects/android.widget.TextView0 - ADD TO CART\u0027 (Root cause: org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: socket hang up\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027PRASADLUNGARE\u0027, ip: \u0027192.168.1.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {app: C:\\Users\\owner\\Downloads\\fl..., appPackage: com.flipkart.android, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 64446, databaseEnabled: false, desired: {app: C:\\Users\\owner\\Downloads\\fl..., autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 64446, deviceName: Xiaomi Redmi Note 7 Pro (An..., fullReset: true, newCommandTimeout: 1800, noReset: false, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 64444, udid: 2a10ca3f}, deviceApiLevel: 28, deviceManufacturer: Xiaomi, deviceModel: Redmi Note 7 Pro, deviceName: 2a10ca3f, deviceScreenDensity: 440, deviceScreenSize: 1080x2340, deviceUDID: 2a10ca3f, fullReset: true, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, noReset: false, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 80, systemPort: 64444, takesScreenshot: true, udid: 2a10ca3f, viewportRect: {height: 2051, left: 0, top: 80, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 841c48bf-1d05-45a7-a138-6988cbf34248\n*** Element info: {Using\u003d-android uiautomator, value\u003dnew UiSelector().className(\"android.widget.TextView\").text(\"ADD TO CART\")}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElements(DefaultGenericMobileDriver.java:54)\r\n\tat io.appium.java_client.AppiumDriver.findElements(AppiumDriver.java:152)\r\n\tat io.appium.java_client.FindsByAndroidUIAutomator.findElementsByAndroidUIAutomator(FindsByAndroidUIAutomator.java:51)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileSearchEngine.findAndroidElements(MobileSearchEngine.java:152)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileSearchEngine.findWebElement(MobileSearchEngine.java:252)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileSearchEngine$findWebElement.call(Unknown Source)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword.findElement(MobileAbstractKeyword.groovy:84)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.doCall(TapKeyword.groovy:76)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.call(TapKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.tap(TapKeyword.groovy:86)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.execute(TapKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.tap(MobileBuiltInKeywords.groovy:577)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$tap$0.call(Unknown Source)\r\n\tat steps.flipkartSteps.user_submits_for_delivery_and_adds_to_cart(flipkartSteps.groovy:67)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:430)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:427)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:527)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat TC_addToCart.run(TC_addToCart:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:114)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:105)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1590677899878.run(TempTestCase1590677899878.groovy:25)\r\n)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.tap(TapKeyword.groovy:86)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.execute(TapKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.tap(MobileBuiltInKeywords.groovy:577)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$tap$0.call(Unknown Source)\r\n\tat steps.flipkartSteps.user_submits_for_delivery_and_adds_to_cart(flipkartSteps.groovy:67)\r\n\tat ✽.user submits \"570727\" for delivery and adds to cart(Include/features/flipkartOrder.feature:10)\r\nCaused by: org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: socket hang up\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027PRASADLUNGARE\u0027, ip: \u0027192.168.1.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {app: C:\\Users\\owner\\Downloads\\fl..., appPackage: com.flipkart.android, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 64446, databaseEnabled: false, desired: {app: C:\\Users\\owner\\Downloads\\fl..., autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 64446, deviceName: Xiaomi Redmi Note 7 Pro (An..., fullReset: true, newCommandTimeout: 1800, noReset: false, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 64444, udid: 2a10ca3f}, deviceApiLevel: 28, deviceManufacturer: Xiaomi, deviceModel: Redmi Note 7 Pro, deviceName: 2a10ca3f, deviceScreenDensity: 440, deviceScreenSize: 1080x2340, deviceUDID: 2a10ca3f, fullReset: true, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, noReset: false, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 80, systemPort: 64444, takesScreenshot: true, udid: 2a10ca3f, viewportRect: {height: 2051, left: 0, top: 80, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 841c48bf-1d05-45a7-a138-6988cbf34248\n*** Element info: {Using\u003d-android uiautomator, value\u003dnew UiSelector().className(\"android.widget.TextView\").text(\"ADD TO CART\")}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElements(DefaultGenericMobileDriver.java:54)\r\n\tat io.appium.java_client.AppiumDriver.findElements(AppiumDriver.java:152)\r\n\tat io.appium.java_client.FindsByAndroidUIAutomator.findElementsByAndroidUIAutomator(FindsByAndroidUIAutomator.java:51)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileSearchEngine.findAndroidElements(MobileSearchEngine.java:152)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileSearchEngine.findWebElement(MobileSearchEngine.java:252)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileSearchEngine$findWebElement.call(Unknown Source)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword.findElement(MobileAbstractKeyword.groovy:84)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.doCall(TapKeyword.groovy:76)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.call(TapKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.tap(TapKeyword.groovy:86)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.execute(TapKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.tap(MobileBuiltInKeywords.groovy:577)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$tap$0.call(Unknown Source)\r\n\tat steps.flipkartSteps.user_submits_for_delivery_and_adds_to_cart(flipkartSteps.groovy:67)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:430)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:427)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:527)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat TC_addToCart.run(TC_addToCart:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:114)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:105)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1590677899878.run(TempTestCase1590677899878.groovy:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user navigates to cart",
  "keyword": "And "
});
formatter.match({
  "location": "flipkartSteps.user_navigates_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user closes the application",
  "keyword": "And "
});
formatter.match({
  "location": "flipkartSteps.user_closes_the_application()"
});
formatter.result({
  "status": "skipped"
});
});