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

Cypress.Commands.add("goToUrl", (page) => {
  try {
    const baseUrl = `https://airmalta.com`;
    switch (page) {
      // Every page/URL can added in this method
      case `Home Page`:
        return cy.visit(`${baseUrl}/`);
      default:
        throw new Error(
          `${BasePage.name}.${this.goToPageUrl.name}: page ("${page}") was not configured`
        );
    }
  } catch (error) {
    throw new Error(
      `${BasePage.name}.${this.goToPageUrl.name}: ${error.message}`
    );
  }
});

Cypress.Commands.add("getCurrentPage", () => {
  cy.wait(2000)
  try {
    cy.log(cy.url())
    cy.url().then((url) => {
      let page = url.split(`.com/`).pop();
      return page;
    });
  } catch (error) {
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
Cypress.Commands.add("clickFirstElement", (selector, text) => {
  try {
    if (text) {
      const regex = new RegExp(`^${text}\\w+`);
      cy.contains(selector, regex).first().click();
    } else {
      cy.get(selector).first().click();
    }
  } catch (error) {
    throw new Error(`Error in clickElement custom command: ${error.message}`);
  }
});

Cypress.Commands.add("getElementsWithText", (selector, text) => {
  cy.get(selector)
    .then(($elements) => {
      const elementsWithText = $elements.filter((index, element) => {
        return Cypress.$(element).text().includes(text);
      });


      return cy.wrap(elementsWithText);
    });
});

Cypress.Commands.add("clickPositionNElement", (selector, position, text) => {
  let Elements = cy.getElementsWithText(selector, text);
  if (position == "first") {
    cy.log("first");
    Elements.first().click();
  } else if (position == "last") {
    cy.log("last");
    Elements.last().click();
  } else {
    let index = parseInt(position,10)-1;
    Elements.eq(index).click();
  }
});

Cypress.Commands.add("setElementValue", (selector, text) => {
  try {
    cy.get(selector).type(text);
  } catch (error) {
    throw new Error(`Error in clickElement custom command: ${error.message}`);
  }
});

Cypress.Commands.add("isElementState", (selector, state) => {
  const stateMethod = state.split(`Not `).pop();
  switch (stateMethod) {
    case `Clickable`:
      return cy.get(selector).should("be.visible").and("be.enabled");
    case `Displayed`:
      return cy.get(selector).should("be.visible");
    case `Enabled`:
      return cy.get(selector).should("be.enabled");
    case `Existing`:
      return cy.get(selector).should("exist");
    default:
      throw new Error(`State ("${state}") was not configured`);
  }
});

Cypress.Commands.add("isFirstElementState", (selector, state) => {
  const stateMethod = state.split(`Not `).pop();
  switch (stateMethod) {
    case `Clickable`:
      return cy.get(selector).first().should("be.visible").and("be.enabled");
    case `Displayed`:
      return cy.get(selector).first().should("be.visible");
    case `Enabled`:
      return cy.get(selector).first().should("be.enabled");
    case `Existing`:
      return cy.get(selector).first().should("exist");
    default:
      throw new Error(`State ("${state}") was not configured`);
  }
});

Cypress.Commands.add("getElementText", (selector) => {
  cy.get(selector).then(($element)=>{
    let elementText = $element.text();
    cy.log(elementText);
  })
});
