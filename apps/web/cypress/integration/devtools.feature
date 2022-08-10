Feature: Developer tools

  Scenario: Opening the developer tools page
    Given I open "/dev"
    Then devtools index page looks correct
    Then I see the site navigation bar
    Then I read "Developer tools"
    Then I read "Courses"
    Then I read "ladino-from-english"
    Then I read "spanish-from-english"
