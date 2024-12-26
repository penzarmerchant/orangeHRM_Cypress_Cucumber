/// <reference types="cypress"/>
import { When, Then } from 'cypress-cucumber-preprocessor/steps'

import dashBoardPage from '../../pages/dashBoardPage';
import adminPage from '../../pages/adminPage';

When(/^User navigates to Admin Tab$/, () => {
	dashBoardPage.clickAdminTab();
});

When(/^User searchers with username$/, () => {
	adminPage.enterUserName('FMLName');
});

When(/^User clicks on search button$/, () => {
	adminPage.clickSearchButton();
})

Then(/^User should be displayed searching results$/, () => {
		adminPage.getSuccessMessage().should('equal','(1) Record Found');
});
