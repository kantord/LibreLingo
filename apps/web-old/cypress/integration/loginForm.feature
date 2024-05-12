Feature: Login form

  LibreLingo has user management features. The user management features let the user create and
  use a user account. This permits the user to synchronize their progress among multiple devices.

  Background:
    Given I enable the feature "auth"

  Scenario: Opening the login form
    When I open "/course/test-1/"
    Given I am logged out
    When I click "Log in"
    Then login form looks correct
    And I read "Log in"
    And I see a "username" field
    And the "username" field has the label "Username"
    And I see a "password" field
    And the "password" field has the label "Password"
    And I see a "Log in" button

  Scenario: Introducing incorrect credentials
    When I open "/login"
    And I introduce "foo" as "username"
    And I introduce "bar" as "password"
    Given my credentials are incorrect
    When I click the "Log in" button
    Then I read "Incorrect username or password"
    And login error looks correct

  Scenario: Introducing correct credentials
    When I open "/login"
    And I introduce "foo" as "username"
    And I introduce "baz" as "password"
    Given my credentials are correct
    When I click the "Log in" button
    And I open "/course/test-1"
    Then I read "Log out"
    And I am on "/"
