# Galip_RedAcre_cypress_bdd
# Cypress BDD Test Framework for AirMalta Website
This repository contains an end-to-end test framework for the AirMalta website, implemented using Cypress and Cucumber. The framework allows you to perform automated tests to verify the functionality of the website from a user's perspective. The tests are written in Gherkin language using Cucumber and are executed using the Cypress testing framework.

## :goal_net: Goals
- keep it simple
- tests are easily readable in BDD format
- project is easily understandable even to people without previous JS or Cypress knowledge
- [use shortcuts](https://docs.cypress.io/api/cypress-api/custom-commands#4-Skip-your-UI-as-much-as-possible) to avoid repeating/testing the same UI actions over and over again


## :gear: Setup
#### Prerequisites
Before running the tests, ensure that you have the following software installed on your machine:

* Node.js (version 12 or higher)
* NPM (Node Package Manager)
  
#### Installation
Clone the repository to your local machine:
sh
git clone https://github.com/glpylmz26/Galip_RedAcre_cypress_bdd.git


Navigate to the project directory:

Install the required dependencies:

sh
npm install



## :heavy_check_mark: Running the Tests
You can run the tests using two different methods:

1. Cypress Test Runner
To run the tests using the Cypress Test Runner, use the following command:

sh
npm run cypress:runner


This command will open the Cypress Test Runner interface, allowing you to select and execute individual test features or scenarios.

2. Cypress Command Line Execution
To execute the tests in headless mode (without the Test Runner), use the following command:

sh
npm run cypress:execution


This command will execute all the test features defined in the cypress/e2e/features/ directory.

## :bulb: Information
###  Sample Test Scenarios
The implemented test scenario is as follows:

Gherkin
Scenario: User can choose the first available ticket

Given I navigate to the "Home Page" URL
When I click the "Accept Cookies" button
And I click the "Round Trip Dropdown"
And I click the "Round Trip" when it is "One way"
And I click the "Departing From"
And I set the "Departing From Airport Input Box" to "Vienna International"
And I click the "Departing Airport Option" when it is "Vienna International"
And I click the "Flying To"
And I set the "Flying To Airport Input Box" to "Malta International Airport"
And I click the "Flying To Airport Option" when it is "Malta International Airport"
And I click the "Departure Date"
And I click the "Calendar Date" at position "First" When it starts with text "€"
And I click the "Find Flights Button"
Then the first available "Flight Price" is "Displayed"


### Folder Structure

Gherkin
Copy code
|-- cypress
|   |-- e2e
|   |   |-- features
|   |   |   |-- Ticket.feature
|   |   |
|   |   |-- pages
|   |   |   |-- flightOneWay.page.js
|   |   |   |-- homePage.page.js
|   |   |
|   |   |-- step_definitions
|   |   |   |-- ticket_steps.js
|   |
|   |-- support
|   |   |-- commands.js
|
|-- cypress.config.js
|-- package.json

cypress/e2e/features: Contains the Gherkin feature file(s) defining the test scenarios.
cypress/e2e/pages: Contains page object models for the different pages on the website.
cypress/e2e/step_definitions: Contains the step definitions for the test scenarios.
cypress/support/commands.js: Contains custom Cypress commands to support the test scenarios.
cypress.config.js: Cypress configuration file that sets up the test environment and plugins.


### Custom Cypress Commands

goToUrl: Custom command to navigate to the specified URL.
getCurrentPage: Custom command to get the current page based on the URL.
clickElement: Custom command to click on an element identified by a selector or containing specific text.
clickPositionNElement: Custom command to click on an element at a specific position identified by a selector or containing specific text.
setElementValue: Custom command to set the value of an element identified by a selector.
isElementState: Custom command to check the state of an element (e.g., clickable, displayed, enabled, existing).
isFirstElementState: Custom command to check the state of the first element in a group (e.g., clickable, displayed, enabled, existing).
getPositionNElementText: Custom command to get the text of an element at a specific position identified by a selector.
Reporting
The test execution generates Allure reports that provide detailed information about the test run. The reports can be found in the allure-report directory after running the tests.


##  :hammer_and_wrench: Adding New Test Cases
Keeping the test implementation process simple and accessible, even for new team members with limited knowledge of Cypress or JavaScript. Adding a new test case to the project follows a straightforward approach. Here's how you can do it:

1. Gherkin Language: Write the new test scenario in Gherkin language using Cucumber's Given-When-Then format in the cypress/e2e/features/ directory. The Gherkin language is easy to read and understand, even for non-technical team members.

2. Step Definitions: Create step definitions for the new scenario in the cypress/e2e/step_definitions/ directory. You can use custom Cypress commands and page object models (pages) provided in the framework to interact with elements on the website. The custom commands are designed to simplify test code and reduce repetitive actions.

3. Reusable Page Objects: If your new test scenario involves interacting with specific elements on the website, you can utilize the existing page object models (pages) defined in the framework. These models encapsulate the locators and interactions with page elements, making it easier to write tests without worrying about the underlying implementation details.

4. Cypress Test Runner: Use the Cypress Test Runner (npm run cypress:runner) to execute the newly added test case. The Test Runner provides an interactive interface to select and run individual test scenarios, making it simple to validate your new test.

## :bar_chart: Generating HTML Report
After running the tests, you can generate an HTML report using multiple-cucumber-html-reporter to view detailed information about the test execution


1. Once the tests are completed, the test execution data will be stored in the cypress/reports/ directory.

2. To generate the HTML report, run the following command:
sh
npm run generate:report

After generating the report, you can find it in the cypress/reports/html directory. Open the index.html file to view the report in your browser.<br>
The multiple-cucumber-html-reporter provides a comprehensive and visually appealing view of the test execution, including features, scenarios, step statuses, and more. It enhances the visibility and traceability of test results, making it easier to analyze and share the test outcomes with stakeholders.

##  Additional Notes
* The tests are implemented using the Cucumber BDD framework, allowing for easy readability and collaboration with stakeholders.
* The cypress-wait-until package is used to ensure that the page loads completely before performing actions.
* The framework uses the Page Object Model (POM) design pattern to separate test code from page-specific code, enhancing maintainability and reusability.
* The tests are parameterized to support multiple environments and configurations.