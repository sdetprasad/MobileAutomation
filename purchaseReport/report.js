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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Object Object Repository/new/android.widget.TextView0 - Apple iPhone XR (Black 128 GB) not found\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.doCall(TapKeyword.groovy:79)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.call(TapKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.tap(TapKeyword.groovy:86)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.execute(TapKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.tap(MobileBuiltInKeywords.groovy:577)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$tap$0.call(Unknown Source)\r\n\tat steps.flipkartSteps.user_search_for_smartphone(flipkartSteps.groovy:55)\r\n\tat ✽.user search for \"apple iphone xr 128gb\" smartphone(Include/features/flipkartOrder.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user submits \"570027\" for delivery and adds to cart",
  "keyword": "And "
});
formatter.match({
  "location": "flipkartSteps.user_submits_for_delivery_and_adds_to_cart(String)"
});
formatter.result({
  "status": "skipped"
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
