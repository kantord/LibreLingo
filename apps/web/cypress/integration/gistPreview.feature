Feature: Previewing courses using GitHub Gists

  JSON courses can be uploaded to GitHub Gists. The user can then preview their course without having to
  deploy the course or set up LibreLingo on their computer.

  Scenario: Opening a skill from a GitHub Gist
    Given I open "/course/gist/skill/helloworld?gistId=2428349a05d81f96b2311c2749ea5c6d"
    Then I see a "Skip" button

