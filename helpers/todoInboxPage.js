const { expect } = require('@playwright/test');
//Se importan los selectores a utilizar y se guardan en una variable para su invocación
const selectors = require('../selectors/todoInbox.json');

module.exports = {
    //Se hace click en el elemento inboxOption
    async clickInBoxMenu (page) {
        await page.click(selectors.Menu.inbox.inboxOption)
    },
    //Se llena el campo textArea con el texto 'Nota numero 1'
    async setNoteInbox (page) {
        await page.fill(selectors.Menu.inbox.textArea, 'Nota numero 1')
    },
    // Verify Titulo de la Nota
    async verifyTitleOfNewNota(page) {
        const text = await page.locator(selectors.Menu.inbox.itemEditOn).textContent();
        expect(text).toBe('Nota numero 1');
    },
    //Se hace click en el elemento addButton
    async clickAddButton(page) {
        await page.click(selectors.Menu.inbox.addButton)
    },
    //Se hace click en el elemento buttonLogin
    async clickItemMenu(page) {
        const item = await page.locator(selectors.Menu.inbox.itemEditOn)
        await item.hover()
        await page.waitForTimeout(1000);
        await page.click(selectors.Menu.inbox.itemMenu)
    },
    //Se hace click en el elemento itemMenuEdit
    async clickItemEdit(page) {
        await page.click(selectors.Menu.inbox.itemMenuEdit)
    },
    //Se actualiza el campo añadiendo el texto 'Actualizado'
    async setUpdateNote(page){
        const noteBox = await page.$(selectors.Menu.inbox.itemEditOn);
        await noteBox.click();
        await noteBox.type(' Actualizado');
    },
    // Verify Titulo de la Nota Actualizada
    async verifyTitleOfNotaUpdated(page) {
        const text = await page.locator(selectors.Menu.inbox.itemEditOn).textContent();
        expect(text).toBe('Nota numero 1 Actualizado');
    },
    // Se hace click en el elemento 
    async clickDeleteItem(page) {
        await page.click(selectors.Menu.inbox.itemMenuDelete)
    },
    // Verifica el mensaje de confirmación de eliminación
    async verifyMessageDelete(page) {
        const text = await page.locator(selectors.Menu.inbox.messageBox).textContent();
        expect(text).toBe('Item has been Deleted');
    }
}