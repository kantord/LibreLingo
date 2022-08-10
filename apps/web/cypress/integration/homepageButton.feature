Feature: Homepage button

  Scenario: I'm on course page
    When I open "/course/test/"
    And I click on link "logo"
    Then I should be on "/course/test/"

  Scenario: I'm on skill introduction page
    When I open "/course/test/skill/animals/introduction"
    And I click on link "logo"
    Then I should be on "/course/test/"
  
  Scenario: I'm on skill page
    When I open "/course/test/skill/animals"
    And I click on link "logo"
    Then I should be on "/course/test/"
