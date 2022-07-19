Feature: Terms of Service

  Scenario: Opening the terms of service
    Given I open "/tos"
    Then the terms of service page looks correct

  Scenario: Opening license
    Given I open "/license"
    Then the license page looks correct
