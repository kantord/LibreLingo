Feature: Skill introduction page

  An introduction page for skills, where the user can read the contents of an (optional)
  markdown file, which explains the grammar in the skill.

  Scenario: Opening the introduction page
    When I open "/course/test"
    And I click "Learn Nature"
    Then I should be on "/course/test/skill/nature/introduction"
    Then I read "Introduction to nature"
    When I click "Practice Nature" 
    Then I should be on "/course/test/skill/nature"


