/// <reference types="Cypress"/>
import BasePage from "./basePage";



class MyInfoPage extends BasePage{
    constructor(){
        super();
        this.firstNameTextBox='input[name="firstName"]';
        this.middleNameTextBox='input[name="middleName"]';
        this.lastNameTextbox='input[name="lastName"]';
        this.employeeIdTextbox=' (//input[contains(@class,"oxd-input")])[5]';
        this.saveButton='button[type="submit"]:nth-child(2)';
        this.sucessMessage='(//p[contains(@class,"oxd-text")])[4]'
    }

    enterFirstName(firstNameText){
        this.b_fillText(this.firstNameTextBox,firstNameText);
        return this;
    }

    enterSecondName(middleNameText){
        this.b_fillText(this.middleNameTextBox,middleNameText);
        return this;
    }

    enterlastName(lastNameText){
        this.b_fillText(this.lastNameTextbox,lastNameText);
        return this;
    }

    enterEmployeeId(employeeIdNumber){
        this.b_fillText(this.employeeIdTextbox,employeeIdNumber,BasePage.LocatorTypes.XPATH);
        return this;
    }

    clickSaveButton(){
        this.b_clickElement(this.saveButton);
        return this;

    }

    getSuccessMessage(){
       return this.b_getText(this.sucessMessage,BasePage.LocatorTypes.XPATH);
    }

    
}

export default new MyInfoPage()