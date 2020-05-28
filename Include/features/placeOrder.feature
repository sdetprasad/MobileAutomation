@Functional
Feature: Adding item to the cart in Shopclues application

Scenario Outline: Purchase smartphone for different pin codes

Given user is on account section of application
When user enters "<emailId>" and "<pass>" then logs in
Then user navigate to categories-mobile section
And user sorts price-High to low and select smartphone
And user enters "<pinCode>" to check availability
And user adds the item to cart and navigate to cart
And user checks item and enters "<quantity>" required
And user closes application

Examples:
|emailId|pass|pinCode|quantity|
|shekhar1237@gmail.com|shekhar123|411008|3|
|shekhar1237@gmail.com|shekhar123|194104|2|