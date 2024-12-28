/// <reference types="Cypress"/>
import BasePage from "./basePage";



class AdminPage extends BasePage{
    constructor(){
        super();
        this.userNameTextBox='(//input[contains(@class,"oxd-input")])[2]';
        this.searchButton='button[type="submit"]';
        this.recordFoundText='(1) Record Found';
        this.firstUserNameText='((//div[@role="row"])[2]//div[@role="cell"])[2]';
    }

    enterUserName(userNameText){
        this.b_fillText(this.userNameTextBox,userNameText,BasePage.LocatorTypes.XPATH);
        return this;
    }

    
    clickSearchButton(){
        this.b_clickElement(this.searchButton);
        return this;
    }

    getFirstUserNameText(){
        return this.b_getText(this.firstUserNameText,BasePage.LocatorTypes.XPATH);
    }

    getSuccessMessage(){
       return this.b_getText(this.recordFoundText,BasePage.LocatorTypes.TEXT);
    }

    
}

export default new AdminPage()