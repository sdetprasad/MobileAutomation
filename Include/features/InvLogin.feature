@Regression
Feature: Login Functionality using Invalid credentials

@InvalidInputs
Scenario Outline: UnSuccesfull login of user

Given user is on application homepage
When user navigates to account section
Then user enters the "<userId>" and "<password>" and hits login
And verify user unable to login and still on login page
And close the application

Examples:
|userId|password|
|jack@gmail.com|jack@123|
|harrywalsh@gmail.com|walsh56|

