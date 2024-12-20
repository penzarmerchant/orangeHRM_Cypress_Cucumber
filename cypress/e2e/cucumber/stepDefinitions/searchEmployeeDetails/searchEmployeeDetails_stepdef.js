/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


When(/^User navigates to Admin Tab$/, () => {
	cy.get('.oxd-main-menu-item').contains('Admin').click();
});

When(/^User searchers with username$/, () => {
	cy.get('.oxd-input:nth-child(1)').type('shula1');
});

When(/^User clicks on search button$/, () => {
	cy.get('button[type="submit"]').click();
});

Then(/^User should be displayed searching results$/, () => {
        cy.get('.oxd-text--span').contains('(1) Record Found').should('be.visible');
});
