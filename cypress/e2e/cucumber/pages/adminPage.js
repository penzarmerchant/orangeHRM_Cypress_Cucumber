/// <reference types="Cypress"/>
import BasePage from "./basePage";



class AdminPage extends BasePage{
    constructor(){
        super();
        this.userNameTextBox='(//input[contains(@class,"oxd-input")])[2]';
        this.searchButton='button[type="submit"]';
        this.recordFoundText='(1) Record Found';
    }

    enterUserName(userNameText){
        this.b_fillText(this.userNameTextBox,userNameText,BasePage.LocatorTypes.XPATH);
        return this;
    }

    
    clickSaveButton(){
        this.b_clickElement(this.searchButtonButton);
        return this;

    }

    getSuccessMessage(){
       return this.b_getText(this.recordFoundText,BasePage.LocatorTypes.TEXT);
    }

    
}

export default new AdminPage()