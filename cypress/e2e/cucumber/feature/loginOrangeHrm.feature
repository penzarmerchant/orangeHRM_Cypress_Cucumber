Feature: Login Functionality

Scenario: Login with Valid Credentials

Given User is on the login page
When User enter credentials
|username|password|
|Admin|admin123|
And User clicks on login button
Then User will be navigated to the dashboard page


Scenario: Login with InValid Credentials

Given User is on the login page
When User enter credentials
|username|password|
|Admin1|admin|
And User clicks on login button
Then User will view an error message