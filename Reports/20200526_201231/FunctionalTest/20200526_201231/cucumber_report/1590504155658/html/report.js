$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/owner/git/MobileAutomation/Include/features/login.feature");
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