Feature: Course page

  Home page for the course, where the user can see their progress and start practicing skills

  Scenario: Opening course page
    Given I open "/course/test"
    Then course page looks correct
    And I read "Animals"
    And I see 4 skills that are not completed
    And I see a skill that has no image set
    And I see 3 skills that have an image set

  Scenario: Opening course page with a stale skill
    Given I open "/course/test"
    And I have a stale skill
    Then I see a stale skill
    And course page with a stale skill looks correct

  Scenario: Opening course page with a completed skill
    Given I complete a lesson
    Then practice statistics are saved correctly
    And I'm redirected to the course page
    And I see a completed skill
    And course page with a completed skill looks correct
    And I see 3 skills that are not completed
    And I see a Practice Test button

  Scenario: Strengthening stale skill
    Given I open "/course/test"
    Given I open "/course/test"
    And I have a stale skill
    Then I see a stale skill
    Given I complete a lesson
    Then I don't see any stale skills
