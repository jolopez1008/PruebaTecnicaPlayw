//Se importan las funciones correspondientes de Playwright
const { test } = require('@playwright/test');
//Se importa el módulo Login
const Login = require('../helpers/todoLoginPage.js');

//Se ejecutan acciones antes de realizar el test principal
test.beforeEach(async ({ page }) => {
    await Login.goToTodoPage(page);
});


test.describe('Tests sobre Todo Page', () => {

    test('Test Login', async ({ page }) => {
         //Se invocan varias funciones referente al módulo Login
        await Login.clickLogin(page)
        await Login.setEmail(page)
        await Login.setPassword(page)
        await Login.clickLoginButton(page)
        await Login.verifyLogoutButtonDisplayed(page)       
    });
 });  