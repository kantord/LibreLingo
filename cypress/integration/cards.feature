Feature: Cards challange

  A challenge type where the user has to select the correct card

  Scenario: Gettings a cards challenge
    Given I open "course/test/skill/_cards_test"
    Then cards challenge looks correct
    And I read "Which of these is"
    And I don't read "undefined"
    And I see 3 cards
    And I see 3 inactive cards
    And I don't see the challenge panel
    And I don't see a Submit button

  Scenario: Getting a cards challenge in an iPhone
    Given that I have an iPhone 6
    And I open "course/test/skill/_cards_test"
    Then I see 4 cards

  Scenario: Clicking a card
    Given I open "course/test/skill/_cards_test"
    And I click a card
    Then I see the challenge panel
    And I see a Submit button
    And I see an active card
    And I see 2 inactive cards

  Scenario: Submitting the correct answer
    Given I open "course/test/skill/_cards_test"
    And I click the correct card
    And I click "Submit"
    Then I read "Correct solution"
    And I see a Continue button

  Scenario: Submitting the incorrect answer
    Given I open "course/test/skill/_cards_test"
    And I click an incorrect card
    And I click "Submit"
    Then I read "Incorrect solution"
    And I see a Continue button
