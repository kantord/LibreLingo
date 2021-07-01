Feature: Option selection challenge

  A challenge type where the user has to choose from multiple possible answers

  Scenario: Getting an option selection challenge
    Given I open "course/test/skill/options-test-0?testChallenge=5075bbb5a7df"
    Then option selection challenge looks correct
    And I read "Which of these is"
    And I see 3 options
    And every option is inactive
    Then I see a panel with only a skip button
    And I don't see a "Submit" button

  Scenario: clicking an option
    Given I open "course/test/skill/options-test-0?testChallenge=5075bbb5a7df"
    And I select an option
    Then option selection challenge with first option selected looks correct
    And I see 2 inactive options
    And I see 1 active option

  Scenario: Submitting correct answer
    Given I open "course/test/skill/options-test-0?testChallenge=5075bbb5a7df"
    And I select the correct option
    And I click "Submit"
    Then I read "Correct solution"
    And I see a "Continue" button

  Scenario: Submitting incorrect answer
    Given I open "course/test/skill/options-test-0?testChallenge=5075bbb5a7df"
    And I select an incorrect option
    And I click "Submit"
    Then I read "Incorrect solution"
    And I see a "Continue" button
