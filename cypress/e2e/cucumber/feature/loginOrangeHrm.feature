Feature: Login Functionality

Scenario: Login with Valid Credentials

Given User is on the login page
When User enters valid credentials 
And User clicks on login button
Then User will be navigated to the dashboard page


Scenario: Login with InValid Credentials

Given User is on the login page
When User enters invalid credentials 
And User clicks on login button
Then User will view an error message