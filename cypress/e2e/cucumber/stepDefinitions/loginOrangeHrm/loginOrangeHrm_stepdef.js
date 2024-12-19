/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


Given(/^User is on the login page$/, () => {
	cy.visit('https://opensource-demo.orangehrmlive.com/');
});

When(/^User enters valid credentials$/, () => {
	cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
});

When(/^User clicks on login button$/, () => {
        cy.get('button[type="submit"]').click();
});

Then(/^User will be navigated to the dashboard page$/, () => {
	cy.get('.oxd-topbar-header-breadcrumb').should('be.visible');
});
