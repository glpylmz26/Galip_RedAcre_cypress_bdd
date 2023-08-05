Feature: User can search a ticket

    Scenario: User can choose first available ticket
        Given I navigate the "Home Page" URL
        When I click the "Accpet Cookies"
            And I click the "Round Trip Dropdown"
            And I click the "Round Trip" when it is "One way"
            And I click the "Departing From"
            And I set the "Departing From Airport Input Box" to "Vienna International"
            And I click the "Departing Airport Option" when it is "Vienna International"
            And I click the "Flying To"
            And I set the "Flying To Airport Input Box" to "Malta International Airport"
            And I click the "Flying To Airport Option" when it is "Malta International Airport"
            And I click the "Departure Date"
            And I click "Calendar Date" at position "3" When it starts with text "€"
            And I click the "Find Flights Button"
        Then the first available "Flight Price" is "Displayed"