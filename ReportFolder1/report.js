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
      "name": "@FunctionalTest"
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
      "name": "@FunctionalTest"
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
  "status": "passed"
});
formatter.step({
  "name": "verify MyOrders section is present",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.verify_MyOrders_section_is_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "closes the application",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.closes_the_application()"
});
formatter.result({
  "status": "passed"
});
});