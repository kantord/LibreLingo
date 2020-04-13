Feature: Course page

  Home page for the course, where the user can see their progress and start practicing skills

  Scenario: Opening course page
    Given I open "/course/test"
    Then course page looks correct
    Then I read "Animals"
