/// <reference types="cypress"/>
import BasePage from "./basePage";
import DashBoardPage from "./dashBoardPage"

class LoginPage extends BasePage{
    constructor(){
        super();
        this.userNameTextBox='input[name="username"]';
        this.passwordTextBox='input[name="password"]';
        this.loginButton='button[type="submit"]';
        this.errorMessage='.oxd-alert-content-text';
    }

    enterUserName(userNameText){
        this.b_fillText(this.userNameTextBox,userNameText);
        return this;
    }

    enterPassword(passwordText){
        this.b_fillText(this.passwordTextBox,passwordText);
        return this;
    }

    clickLogin() {
        this.b_clickElement(this.loginButton);
        return DashBoardPage ;
    }

    getErrorMessageText(){
      return this.b_getText(this.errorMessage);
    }

    completeLogin(userNameText,passwordText){
        this.enterUserName(userNameText);
        this.enterPassword(passwordText);
        this.clickLogin()
    }
    
}

export default new LoginPage()