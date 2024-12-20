/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


Given(/^User is on the dashboard page$/, () => {
	cy.fixture('orangeHrm').then((data)=>{
		cy.visit('https://opensource-demo.orangehrmlive.com/');
		cy.get('input[name="username"]').type(data.username);
		cy.get('input[name="password"]').type(data.password);
		cy.get('button[type="submit"]').click();
	})
	
});

When(/^User clicks on my info tab$/, () => {
	cy.get('.oxd-main-menu-item--name').contains('My Info').click();
});

When(/^User edits the required personal details$/, () => {
	cy.get('input[name="firstName"]').type('Suresh');
	
});

When(/^User clicks on save$/, () => {
	cy.get('button[type="submit"]:nth-child(2)').click();
});

Then(/^User is able to view toast message$/, () => {
	cy.get('.oxd-toast-content-text').contains('Success');
});
