Feature: Course page

  Home page for the course, where the user can see their progress and start practicing skills

  Scenario: Opening course page
    Given I enable the feature "auth"
    And I open "/course/test-1"
    Then course page looks correct
    And I read "Animals"
    And I see 10 skills that are not started
    And I see a skill that has no image set
    And I see a "Log in" link in the navbar
    And I see a "Feedback" link in the navbar

  Scenario: Opening course page with a stale skill
    Given I open "/course/test-1"
    And I have a stale skill
    Then I see a stale skill
    And course page with a stale skill looks correct

  Scenario: Opening course page with a completed skill
    Given I complete a lesson
    And I complete a lesson
    And I complete a lesson
    And I complete a lesson
    And I complete a lesson
    Then practice statistics are saved correctly
    And I'm redirected to the course page
    And I see a completed skill
    And course page with a completed skill looks correct
    And I see 9 skills that are not started
    And I see a "Practice" button

  Scenario: Opening course page with a started, but not completed skill
    Given I complete a lesson
    Then practice statistics are saved correctly
    And I'm redirected to the course page
    And I see a started skill
    And course page with a started skill looks correct
    And I see 9 skills that are not started
    And I see a "Continue learning" button
    And I see a skill with 20% progress
    And I don't read "pan, leche"

  Scenario: Strengthening stale skill
    Given I open "/course/test-1"
    Given I open "/course/test-1"
    And I have a stale skill
    Then I see a stale skill
    Given I complete a lesson
    Then I don't see any stale skills
