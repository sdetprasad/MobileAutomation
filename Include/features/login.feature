@FunctionalTest
Feature: Login functionality of ShopClues Application

Background:
Given User is on the application Homepage

@ValidInputs
Scenario: Valid inputs provided
When user navigates to Account Section
Then user enters credentials and hits Login
And verify MyOrders section is present
And closes the application
