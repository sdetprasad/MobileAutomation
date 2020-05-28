@FuntionalTest
Feature: Placing order through Flipkart Application

@addToCart
Scenario Outline: Purchasing of smartphone using parameterization

Given user has opended Flipkart application
When user navigates to categories-electronics-mobile
Then user search for "<model>" smartphone
And user submits "<pinCode>" for delivery and adds to cart
And user navigates to cart
And user closes the application

Examples:
|model|pinCode|
|apple iphone xr 128gb|570027|
|apple iphone xr 128gb|570727|