Feature: Sign up form

  LibreLingo has user management features. The user management features let the user create and
  use a user account. This permits the user to synchronize their progress among multiple devices.

  Background:
    Given I enable the feature "auth"
    When I open "/course/test/"
    Given I am logged out

  Scenario: Opening the sign up form
    When I click "Sign up"
    Then sign up form looks correct
    And I read "Sign up"
    And I see a "username" field
    And the "username" field has the label "Username"
    And I see a "email" field
    And the "email" field has the label "Email"
    And I see a "password" field
    And the "password" field has the label "Password"
    And I see a "password_confirmation" field
    And the "password_confirmation" field has the label "Repeat password"
    And I see a Sign up button

  Scenario: Cannot submit empty form
    When I open "/sign-up"
    And I click the "Sign up" button
    Then I read "Please choose a username"
    Then I read "Please tell us your email address"
    Then I read "Please choose a password"
    Then I read "Please verify your chosen password by repeating it"
