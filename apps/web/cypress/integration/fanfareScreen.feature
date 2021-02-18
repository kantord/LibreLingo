Feature: Fanfare screen
  
  A screen to display to the user when a practice session is successfully completed

  Scenario: Getting to the fanfare screen
    Given I get to the fanfare screen
    Then fanfare screen looks correct
    And fanfare screen looks cute
    And I read "Lesson completed!"
    And I see a "Continue to course page" button
    And I see a "Tweet" button
    And I see a twitter icon

  Scenario: Going to course page using the button
    Given I get to the fanfare screen
    And I click "Continue to course page"
    Then I should be on "/course/test"

  Scenario: Going to course page using the keyboard
    Given I get to the fanfare screen
    And I hit the enter key
    Then I should be on "/course/test"
