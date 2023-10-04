const { expect } = require('@playwright/test');
//Se importan los selectores a utilizar y se guardan en una variable para su invocación
const selectors = require('../selectors/todoSign.json');
//Se importan los parámetros a utilizar y se guardan en una variable para su invocación
const parameters = require('../config/parameters.json');

module.exports = {
    //Se hace click en el elemento signUpButton
    async clickSignButton (page) {
        await page.click(selectors.signUpButton)
    },
    //Se llena el campo Full Name con el texto 'Juan Perez'
    async setFullName (page) {
        await page.fill(selectors.signUpForm.fullName, 'Juan Perez')
    },
    //Se llena el campo email con el texto'
    async setEmail (page) {
        let now = new Date ();
        let time = now.getTime ();
        const email="test" + time.toString() + "@gmail.com";
        await page.fill(selectors.signUpForm.email, email)
    },
    //Se llenan los campos password  con el texto 'strange!'
    async setPassword (page) {
        await page.fill(selectors.signUpForm.password, 'strange!')
    },
    //Se hace click en el checkbox de terms
    async clickTermsCheckBox(page) {
        await page.click(selectors.signUpForm.termsCheckbox)
    },
    //Se hace click en el elemento buttonLogin
    async clickSignUpForm (page) {
        await page.click(selectors.signUpForm.signUpButton)
    },
}