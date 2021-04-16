Feature: Chips challenge

  A challenge type where the user has to reorder chips to form a correct sentence

  Scenario: Getting a chips challenge
    Given I open "/course/test/skill/_chips_test1"
    Then chips challenge looks correct
    Given I open "/course/test/skill/_chips_test0"
    Then I read "Translate"
    And I read "How"
    And I read "are"
    And I read "you"
    And I read "today?"
    Then I see a panel with only a skip button
    And I see the correct chips

  Scenario: Using the mini-dictionary
    Given I open "/course/test/skill/_chips_test1"
    Then words with definitions have tooltips
    And words without a definition have no tooltip
    
  Scenario: Submitting an incorrect solution
    Given I open "/course/test/skill/_chips_test0"
    And I click "estás"
    And I click "hoy"
    And I click "Como"
    Given I click "Submit"
    Then I read "Incorrect solution"
    And I read "Correct answer: ¿Como, estás hoy?"
    And I see a "Continue" button
    Given I click "Continue"
    Then I see a panel with only a skip button

  Scenario: Submitting a correct solution
    Given I open "/course/test/skill/_chips_test0"
    And I click "Como"
    And I click "estás"
    And I click "hoy"
    Given I click "Submit"
    Then I see the challenge panel with no skip button
    And I read "Correct solution"
    And I see a "Continue" button
    Given I click "Continue"
    Then I see a panel with only a skip and a finish early button

  Scenario: Submitting an alternative correct solution
    Given I open "/course/test/skill/_chips_test0"
    And I click "Tu"
    And I click "Como"
    And I click "estás"
    And I click "hoy"
    Given I click "Submit"
    Then I see the challenge panel with no skip button
    And I read "Correct solution"
    And I see a "Continue" button
    Given I click "Continue"
    Then I see a panel with only a skip and a finish early button
