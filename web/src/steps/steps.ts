import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import NavigationPage from '../pageobjects/navigation.page.js';
import AboutPage from '../pageobjects/about.page.js';

const pages = {
    login: LoginPage
}

/*Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});*/
Given("I am on the login page", async () => {
    await HomePage.open_login();
});
Given("I am on the saucelabs page", async () => {
    await AboutPage.open_saucelabs();
});
Then("I am going through saucelabs page", async () => {
    await AboutPage.assertAboutpage();
});
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});
Then("I should see on Home page", async () => {
    await HomePage.assertHomepage();
    await HomePage.assertHeader();
    await HomePage.assertProduct();
    await HomePage.assertFooter();
});
Then("I am going through the footer", async () => {
    await NavigationPage.clickMenu();
    await NavigationPage.assertMenu();
    await NavigationPage.clickMenuInstances();
});
Then("I logout on the saucedemo page", async () => {
    await NavigationPage.clickMenu();
    await NavigationPage.clickLogout();
});
Then("Login blocked", async () => {
    await LoginPage.loginBlocked();
});
Then("Login problem User", async () => {
    //await LoginPage.problemUser();
    await HomePage.assertHomepage();
    await HomePage.assertHeader();
    await HomePage.assertProduct();
    await HomePage.assertFooter();
});
Then("Login performance glitch User", async () => {
    //await LoginPage.problemUser();
    await HomePage.assertHomepage();
    await HomePage.assertHeader();
    await HomePage.assertProduct();
    await HomePage.assertFooter();
});