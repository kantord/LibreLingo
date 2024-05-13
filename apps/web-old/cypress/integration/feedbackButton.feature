Feature: Feedback button

  Scenario: Clicking the feedback button leads to the GitHub repo
    Given I open "/course/test-1"
    Then the "Feedback" button opens the course repository page in a new tab
