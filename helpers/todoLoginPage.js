const { expect } = require('@playwright/test');
//Se importan los selectores a utilizar y se guardan en una variable para su invocación
const selectors = require('../selectors/todoLogin.json');
//Se importan los parámetros a utilizar y se guardan en una variable para su invocación
const parameters = require('../config/parameters.json');

module.exports = {

    //Se redirige a la URL especificada en el parámetro todoPage
    async  goToTodoPage (page) {
        await page.goto(parameters.todoPage);

    },
    //Se hace click en el elemento Login
    async clickLogin (page) {
        await page.click(selectors.Login.imgLoging)
    },
    //Se llena el campo inputEmail con el texto 'jolopez.freelancer@gmail.com'
    async setEmail (page) {
        await page.fill(selectors.Login.inputEmail, 'jolopez.freelancer@gmail.com')
    },
    //Se llena el campo inputPass con el texto '!strange'
    async setPassword (page) {
        await page.fill(selectors.Login.inputPass, 'strange!')
    },
    //Se hace click en el elemento buttonLogin
    async clickLoginButton (page) {
        await page.click(selectors.Login.buttonLogin)
    },
    //Se verifica que el elemento logout sea visible
    async verifyLogoutButtonDisplayed(page) {
        const logoutLink = await page.locator (selectors.Menu.logout)
        expect (await logoutLink.isVisible()).toBeTruthy()
    }

}