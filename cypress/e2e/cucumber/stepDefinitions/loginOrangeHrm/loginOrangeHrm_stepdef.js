/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


Given(/^User is on the login page$/, () => {
	cy.visit('https://opensource-demo.orangehrmlive.com/');
});


When(/^User enter credentials$/, (dataTable) => {
	cy.get('input[name="username"]').type(dataTable.rawTable[1][0]);
    cy.get('input[name="password"]').type(dataTable.rawTable[1][1]);
});


When(/^User clicks on login button$/, () => {
        cy.get('button[type="submit"]').click();
});

Then(/^User will be navigated to the dashboard page$/, () => {
	cy.get('.oxd-topbar-header-breadcrumb').should('be.visible');
});


Then(/^User will view an error message$/, () => {
	cy.get('.oxd-alert-content-text').should('be.visible');
});