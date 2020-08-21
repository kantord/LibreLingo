Feature: Sign up success page

  LibreLingo has user management features. The user management features let the user create and
  use a user account. This permits the user to synchronize their progress among multiple devices.

  Scenario: Getting to the sign up success page
    When I open "/sign-up-success"
    Then sign up success page looks correct
    And I read "Registration successsful!"
    And I read "You can now log in."
    And I see a "Log in" button

  Scenario: Clicking the log in button
    When I open "/sign-up-success"
    And I click the "Log in" button
    Then I should be on "/login"
