import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/homePage.page.js";

const pages = {
  "en": HomePage,
};

Given("I navigate the {string} URL", (element) => {
  cy.goToUrl(element);
});
When("I click the {string}", (element) => {
  cy.getCurrentPage().then((currentPage) => {
    cy.clickElement(pages[currentPage].getSelector(element));
  });
});

When("I click the {string} when it is {string}", (element,text) => {
  cy.getCurrentPage().then((currentPage) => {
    cy.clickElement(pages[currentPage].getSelector(element),text);
  });
});
When("I set the {string} to {string}", (element,text) => {
  cy.getCurrentPage().then((currentPage) => {
    cy.setElementValue(pages[currentPage].getSelector(element),text);
  });
});
//   cy.url().should("contain", "en-gb");

  // cy.get(`[id="flight-search-widget"]`);
  // //  cy.get(`[class="select-option ellipsis "]`).click();
  // cy.get(`.route-selection-origin .input-holder.airport-selection `).click();
  // cy.get(`input.form-control.airport-search-input`).type(
  //   `Vienna International`
  // );
 

  //   cy.get(`#onetrust-accept-btn-handler`).click();



 

  //   cy.get(`[class^="DayPicker-Day"][aria-disabled="false"]`).first().click();


  //   cy.get(`[class = "LinkUI__Link-bREbZJ BPjDb"]`).click();
  //   //   cy.get(`[class="sc-jVOTke cmVAqE"]`)
  //   //     .eq(0)
  //   //     .invoke(`text`)
  //   //     .as(`firstTicketPrice`);
  //   //   cy.log(cy.get(`@firstTicketPrice`));

  //   //   cy.get(`[class="sc-jVOTke cmVAqE"]`)
  //   //     .get(0)
  //   //     .then(($el) => {
  //   //       cy.log($el.text());
  //   //     });
  //   cy.get('div[class="Spinner-bngBjQ dYMcLP"]').should("not.exist");

  //   cy.get('div[class="sc-jVOTke cmVAqE"]')
  //     .first()
  //     .then((element) => {
  //       // Now 'element' represents the first 'ul li' element
  //       // To get the text content, you can use the .text() command on 'element'
  //       const text = element.text();

  //       // You can use the 'text' variable in your assertions or log it
  //       cy.log(`The text of the first element is: ${text}`);

  //       // You can also use 'text' in assertions
  //       // expect(text).to.equal('First element text'); // Replace 'First element text' with the expected text of the first element
  //     });

  //   //   cy.get(`[class="sc-jVOTke cmVAqE"]`).first().text();
  //   // cy.get(`[class="screenshot-height-container"]`).should(`be.visible`)
  //   // cy.get(':nth-child(1) > .select-input > .form-control')
  //   // cy.get(`[class="aut-iframe"]`).then(($iframe) => {
  //   //   const iframeWindow = cy.wrap($iframe.contents().find("body"));

  //   //   // Now you are inside the iframe context
  //   //   // Get the text of the element inside the iframe
  //   //   // const elementText = $iframeWindow.find('[value="Round trip]').text();
  //   //   iframeWindow.find('[value="Round trip]').click();

  //   //   // Now use the Cypress assertion command to check the text
  //   //   //   cy.wrap(elementText).should("eq", "SMS Back Office");
  //   // });
  //   // // cy.get(`[value="Round trip]`).click();
  //   cy.wait(10000);
