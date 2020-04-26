Feature: Chips challenge

  A challenge type where the user has to reorder chips to form a correct sentence

  Scenario: Getting a chips challenge
    Given I open "/course/test/skill/_chips_test0"
    Then chips challenge looks correct
    And I read "Translate"
    And I read "How"
    And I read "are"
    And I read "you"
    And I read "today?"
    And I don't read "undefined"
    And I don't see the challenge panel
    And I see the correct chips

  Scenario: Using the mini-dictionary
    Given I open "/course/test/skill/_chips_test1"
    Then words with definitions have tooltips
    And words without a definition have no tooltip
    
  Scenario: Submitting an incorrect solution
    Given I open "/course/test/skill/_chips_test0"
    And I order words incorrectly
    Then I see the challenge panel
    Given I click "Submit"
    Then I read "Incorrect solution"
    And I read "Correct answer: ¿Como, estás hoy?"
    And I see a Continue button
    Given I click "Continue"
    Then I don't see the challenge panel

  Scenario: Submitting a correct solution
    Given I open "/course/test/skill/_chips_test0"
    And I order words correctly
    Then I see the challenge panel
    Given I click "Submit"
    Then I see the challenge panel
    And I read "Correct solution"
    And I see a Continue button
    Given I click "Continue"
    Then I don't see the challenge panel
