// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("goToUrl",(page)=>{
    try{
        const baseUrl = `https://airmalta.com`;
        switch (page){
            // Every page/URL can added in this method
            case(`Home Page`): return cy.visit(`${baseUrl}/`);
            default:
                throw new Error(`${BasePage.name}.${this.goToPageUrl.name}: page ("${page}") was not configured`);
        }
    }
    catch(error){
        throw new Error(`${BasePage.name}.${this.goToPageUrl.name}: ${error.message}`);
    }
})

Cypress.Commands.add("getCurrentPage", () => {
  try {
    cy.url().then((url) => {
      let page = url.split(`.com/`).pop();
      return page;
    });
  } catch (error) {
    // throw `${BasePage.name}.${this.getCurrentPage.name}: ${error.message}`;
    throw new Error(`Error in getCurrentPage custom command: ${error.message}`);
  }
});

Cypress.Commands.add("clickElement", (selector, text) => {
  try {
    if (text) {
      cy.contains(selector, text).click();
    } else {
      cy.get(selector).click();
    }
  } catch (error) {
    throw new Error(`Error in clickElement custom command: ${error.message}`);
  }
});

Cypress.Commands.add("setElementValue", (selector, text) => {
  try {
    cy.get(selector).type(text);
  } catch (error) {
    throw new Error(`Error in clickElement custom command: ${error.message}`);
  }
});
