/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import dashboardPage from '../../pages/dashBoardPage';
import loginPage from '../../pages/loginPage';

Given(/^User is on the login page$/, () => {
	loginPage.b_navigateTo('https://opensource-demo.orangehrmlive.com/');
});


When(/^User enter credentials$/, (dataTable) => {
	loginPage.enterUserName(dataTable.rawTable[1][0]);
	loginPage.enterPassword(dataTable.rawTable[1][1]);
});


When(/^User clicks on login button$/, () => {
        loginPage.clickLogin();
});

Then(/^User will be navigated to the dashboard page$/, () => {
	dashboardPage.getDashboardText().should('equal','Dashboard');
});


Then(/^User will view an error message$/, () => {
	loginPage.getErrorMessageText().should('equal','Invalid credentials')
});