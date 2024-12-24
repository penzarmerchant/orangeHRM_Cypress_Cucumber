/// <reference types="Cypress"/>
import BasePage from "./basePage";
import MyInfoTabPage from "./myInfoPage";
import AdminPage from "./adminPage";


class DashBoardPage extends BasePage{
    constructor(){
        super();
        this.myInfoTab='My Info';
        this.adminTab='Admin';
        this.dashboardTitle='.oxd-topbar-header-breadcrumb';
    }

    clickMyInfoTab(){
        this.b_clickElement(this.myInfoTab,BasePage.LocatorTypes.TEXT);
        return MyInfoTabPage;
    }

    clickAdminTab(){
        this.b_clickElement(this.adminTab,BasePage.LocatorTypes.TEXT);
        return AdminPage;
    }

    getDashboardText(){
        return this.b_getText(this.dashboardTitle);
     }
}

export default new DashBoardPage()