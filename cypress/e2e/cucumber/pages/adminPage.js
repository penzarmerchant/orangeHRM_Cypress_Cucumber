/// <reference types="Cypress"/>
import BasePage from "./basePage";

class AdminPage extends BasePage{
    constructor(){
        super();
        this.userNameTextBox='(//input[contains(@class,"oxd-input")])[2]';
        this.searchButton='button[type="submit"]';
        this.recordFoundText='(1) Record Found';
        this.firstUserNameText='((//div[@role="row"])[2]//div[@role="cell"])[2]';
        this.employeeNameTextBox='input[placeholder="Type for hints..."]';
        this.employeeNameSuggestion='div[role="option"]';
    }

    enterUserName(userNameText){
        this.b_fillText(this.userNameTextBox,userNameText,BasePage.LocatorTypes.XPATH);
        return this;
    }

    
    clickSearchButton(){
        this.b_clickElement(this.searchButton);
        return this;
    }

    enterEmployeeName(employeeNameText){
        this.b_clickElement(this.employeeNameTextBox,employeeNameText)
    }

    clickEmployeeNameSuggestion(){
        this.b_clickElement(this.employeeNameSuggestion);
    }

    searchEmployeeByName(employeeNameText){
        this.enterEmployeeName(employeeNameText);   
        cy.wait(5000);
        this.clickEmployeeNameSuggestion();
        this.clickSearchButton();
    }

    getFirstUserNameText(){
        return this.b_getText(this.firstUserNameText,BasePage.LocatorTypes.XPATH);
    }

    getSuccessMessage(){
       return this.b_getText(this.recordFoundText,BasePage.LocatorTypes.TEXT);
    }
}

export default new AdminPage()