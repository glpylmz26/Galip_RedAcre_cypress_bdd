import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/homePage.page.js";
import FlightOneWay from "../pages/flightOneWay.page.js";

const pages = {
  en: HomePage,
  "flights/oneway": FlightOneWay,
};

Given("I navigate the {string} URL", (element) => {
  cy.goToUrl(element);
});
When("I click the {string}", (element) => {
  cy.getCurrentPage().then((currentPage) => {
    cy.clickElement(pages[currentPage].getSelector(element));
  });
});

When("I click the {string} when it is {string}", (element, text) => {
  cy.getCurrentPage().then((currentPage) => {
    cy.clickElement(pages[currentPage].getSelector(element), text);
  });
});

When(
  "I click {string} at position {string}",
  (element, position) => {
    cy.getCurrentPage().then((currentPage) => {
      cy.clickPositionNElement(pages[currentPage].getSelector(element),position);
    });
  }
);

When(
  "I click {string} at position {string} When it starts with text {string}",
  (element, position, text) => {
    cy.getCurrentPage().then((currentPage) => {
      cy.clickPositionNElement(
        pages[currentPage].getSelector(element),
        position,
        text
      );
    });
  }
);

When("I set the {string} to {string}", (element, text) => {
  cy.getCurrentPage().then((currentPage) => {
    cy.setElementValue(pages[currentPage].getSelector(element), text);
  });
});

Then("the first available {string} is {string}", (element, state) => {
  cy.getCurrentPage().then((currentPage) => {
    cy.isFirstElementState(pages[currentPage].getSelector(element), state);
  });
  cy.getCurrentPage().then((currentPage) => {
    cy.getPositionNElementText(pages[currentPage].getSelector(element),"First");
  });
});
