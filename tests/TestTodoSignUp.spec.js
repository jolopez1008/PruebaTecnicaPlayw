//Se importan las funciones correspondientes de Playwright
const { test } = require('@playwright/test');
//Se importa el módulo Login
const Login = require('../helpers/todoLoginPage.js');
//Se importa el módulo Sign Up
const Sign = require('../helpers/todoSignPage.js');
//Se importa el módulo Inbox
const Inbox = require('../helpers/todoInboxPage.js');

//Se ejecutan acciones antes de realizar el test principal
test.beforeEach(async ({ page }) => {
    await Login.goToTodoPage(page);
});

test.describe('Tests sobre Todo Page SignUp', () => {

    test('Test Sign Up', async ({ page }) => {
        //Se invocan varias funciones referente al módulo Sign Up
        await Sign.clickSignButton(page)
        await Sign.setFullName(page)
        await Sign.setEmail(page)
        await Sign.setPassword(page)
        await Sign.clickTermsCheckBox(page)
        await Sign.clickSignUpForm(page)
        await Login.verifyLogoutButtonDisplayed(page)
        
        await Inbox.clickInBoxMenu(page)
        await Inbox.setNoteInbox(page)
        await Inbox.clickAddButton(page)
        await Inbox.clickItemMenu(page)
        await page.waitForTimeout(1000);
        await Inbox.clickItemEdit(page)
        await page.waitForTimeout(2000);
        await Inbox.setNewNote (page)
        await Inbox.clickItemMenu(page)
        await page.waitForTimeout(1000);

    });
 });