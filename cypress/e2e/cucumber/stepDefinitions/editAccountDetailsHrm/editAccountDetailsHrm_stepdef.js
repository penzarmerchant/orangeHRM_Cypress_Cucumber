/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import loginPage from '../../pages/loginPage'
import myInfoPage from '../../pages/myInfoPage';
import adminPage from '../../pages/adminPage';
import dashBoardPage from '../../pages/dashBoardPage';

Given(/^User is on the dashboard page$/, () => {
	cy.fixture('orangeHrm').then((data)=>{
		loginPage.b_navigateTo('https://opensource-demo.orangehrmlive.com/')
		loginPage.completeLogin(data.username,data.password);
	})
});

When(/^User clicks on my info tab$/, () => {
	dashBoardPage.clickMyInfoTab();
});

When(/^User edits the required personal details$/, () => {
	cy.wait(2000);
	myInfoPage.enterFirstName('Gautam');
	myInfoPage.enterMiddleName('Girish');
	myInfoPage.enterlastName('Shah');
	myInfoPage.enterEmployeeId('EMP09974');
});

When(/^User clicks on save$/, () => {
	myInfoPage.clickSaveButton();
});

Then(/^User is able to view toast message$/, () => {
	myInfoPage.getSuccessMessage().should('equal','Success');
});
