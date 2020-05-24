Feature: Short text input challange

  A challange type where the user has to translate a short phrase

  Scenario: Getting a short text input challenge
    Given I open "/course/test/skill/_short_input_test0"
    Then short text input challenge looks correct
    And I read "Type"
    And I read "dog"
    And I read "in Test Language!"
    Given I open "/course/test/skill/_short_input_test1"
    Then I read "foo"
    And I don't see the challenge panel
    And I'm not able to submit
    And I don't see a Submit button
    And I see a card with an image
    And I see an input field
    And the input field is focused
    And the input field has a "Type your answer…" placeholder
    
  Scenario: Virtual keyboard for special characters
    Given I open "/course/test/skill/_short_input_test0"
    Then I see a virtual keyboard with 16 keys
    And the keys on the virtual keyboard have proper labels
    And clicking on a key types into the input field
    Given I submit solution
    Then the virtual keyboard is inactive

  Scenario: Typing into the input field
    Given I open "/course/test/skill/_short_input_test0"
    And I type "el perro"
    Then I see the challenge panel
    
  Scenario: Submitting incorrect answer
    Given I open "/course/test/skill/_short_input_test0"
    And I type "asdfg"
    And I click "Submit"
    Then I read "Incorrect solution"
    And I read "Correct answer: perro"
    And I see a Continue button
    
  Scenario: Submitting correct answer
    Given I open "/course/test/skill/_short_input_test0"
    And I type "perro"
    And I click "Submit"
    Then I read "Correct solution"
    And I see a Continue button

  Scenario: Submitting alternative correct answer
    Given I open "/course/test/skill/_short_input_test0"
    And I type "can"
    And I click "Submit"
    Then I read "Correct solution"
    And I see a Continue button

  Scenario: Submitting alternative correct answer
    Given I open "/course/test/skill/_short_input_test0"
    And I type "el perro"
    And I click "Submit"
    Then I read "Correct solution"

  Scenario: Submitting correct answer with a small typo
    Given I open "/course/test/skill/_short_input_test0"
    And I type "      el      pierro      "
    And I click "Submit"
    Then I read "Correct solution"
    And I read "You made a small error. Correct spelling: el perro"

  Scenario: Submitting correct answer with a small casing error
    Given I open "/course/test/skill/_short_input_test0"
    And I type "PerRo"
    And I click "Submit"
    Then I read "Correct solution"
    And I don't read "You made a small error. Correct spelling: perro"

  Scenario: Going to the next challenge
    Given I open "/course/test/skill/_short_input_test2"
    And I type "agua"
    And I click "Submit"
    And I click "Continue"
    Then I don't see the challenge panel

  Scenario: Going to the next challenge with keyboard only
    Given I open "/course/test/skill/_short_input_test2"
    And I type "agua"
    And I hit the enter key
    And I hit the enter key
    Then I don't see the challenge panel

  Scenario: using the hover-over dictionary
    Given I open "/course/test/skill/_short_input_test3"
    Then I see a tooltip that says "tu"
    Then I don't see a tooltip that says "How"
    Then The word "How" has no tooltip definition
