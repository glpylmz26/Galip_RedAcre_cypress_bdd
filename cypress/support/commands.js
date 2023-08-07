import "cypress-wait-until";
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
    switch (page) {
      // Every page/URL can added in this method
      case `Home Page`:
        return cy.visit(`/`);
      default:
        throw new Error(
          `Error in goToUrl custom command with navigation to ${page}: ${error.message} `
        );
    }
  } catch (error) {
    throw new Error(
      `Error in goToUrl custom command: ${error.message}`
    );
  }
});

Cypress.Commands.add("getCurrentPage", () => {
  cy.waitUntil(() => cy.url().should("not.include", "deeplink"));
  try {
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

// Cypress.Commands.add("clickFirstElement", (selector) => {
//   try {
//       cy.get(selector).first().click();
//   } catch (error) {
//     throw new Error(`Error in clickElement custom command: ${error.message}`);
//   }
// });

Cypress.Commands.add("getElementsWithText", (selector, text) => {
  if(text){
    cy.get(selector).then(($elements) => {
      const elementsWithText = $elements.filter((index, element) => {
        return Cypress.$(element).text().includes(text);
      });
      return elementsWithText;
    });
  }else{
    cy.get(selector).then(($elements) => {
      
      return $elements;
    });
  }
});

Cypress.Commands.add("clickPositionNElement", (selector, position, text) => {
  cy.getElementsWithText(selector, text).then((Elements) => {
    let index;
    if (position.toLowerCase() == "first") {
      index = 0;
    } else if (position.toLowerCase() == "last") {
      index = Elements.length - 1;
    } else {
      if (isNaN(position)) {
        throw new Error(
          `"Position" : "${position}" must be first/last or a number`
        );
      }
      index = parseInt(position, 10) - 1;
    }
    cy.wrap(Elements.eq(index)).should('be.visible').then((element) => {
      element[0].click();
    });
  });
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

Cypress.Commands.add("getPositionNElementText", (selector, position) => {
  cy.get(selector).then(($elements) => {
    let index;
    if (position.toLowerCase() == "first") {
      index = 0;
    } else if (position.toLowerCase() == "last") {
      index = $elements.length - 1;
    } else {
      if (isNaN(position)) {
        throw new Error(
          `"Position" : "${position}" must be first/last or a number`
        );
      }
      index = parseInt(position, 10) - 1;
    }
    cy.wrap($elements.eq(index))
      .should("be.visible")
      .invoke("text")
      .then((elementText) => {
        cy.log(elementText.trim());
      });
  });
});
