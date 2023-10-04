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
    //Se hace click en el elemento addButton
    async clickAddButton(page) {
        await page.click(selectors.Menu.inbox.addButton)
    },
    //Se hace click en el elemento buttonLogin
    async clickItemMenu(page) {
        const item = await page.locator(selectors.Menu.inbox.itemTextEdit)
        await item.hover()
        await page.click(selectors.Menu.inbox.itemMenu)
    },
    async clickItemEdit(page) {
        await page.click(selectors.Menu.inbox.itemMenuEdit)
    },
    async setNewNote(page){
        const div = page.locator(selectors.Menu.inbox.itemEditOn); 
        await div.fill('Nota actualizada');
    }
}