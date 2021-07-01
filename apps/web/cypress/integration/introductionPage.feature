Feature: Skill introduction page

  An introduction page for skills, where the user can read the contents of an (optional)
  markdown file, which explains the grammar in the skill.

  Scenario: Opening the introduction page
    When I open "/course/test"
    And I click "Learn Animals"
    Then I should be on "/course/test/skill/animals/introduction"
    Then I read "Introduction to animals"
    When I click "Practice Animals" 
    Then I should be on "/course/test/skill/animals"


