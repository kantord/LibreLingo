Feature: Skipping a challenge

  Each challenge should come with a skip button. Pressing the skip button postpones the challenge for later.

  Scenario: Skip button is visible
    Given I open "/course/test/skill/_chips_test0"
    Then I should not have progressed
    Then I see a "Skip" button

  Scenario: Skipping a challenge
    Given I open "/course/test/skill/_chips_test0"
    When I click "Skip"
    Then I should have progressed

  Scenario: Skipping all challenges
    Given I open "/course/test/skill/_chips_test0"
    When I click "Skip"
    And I wait a moment
    And I click "Skip"
    Then I read "Lesson completed!"
    And I read "You've completed 0 challenges"
    When I click "Continue to course page"
    Then I don't see any completed skills
