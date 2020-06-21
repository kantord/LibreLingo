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
    And I read "Please tell us your email address"
    And I read "Please choose a password"

  Scenario: Choosing correct username
    When I open "/sign-up"
    And I introduce "foobar" as "username"
    And I click the "Sign up" button
    Then I don't read "Please choose a username"
    And  sign up form with errors looks correct

  Scenario: Choosing a username that's too short
    When I open "/sign-up"
    And I introduce "foo" as "username"
    And I click the "Sign up" button
    Then I read "Please choose a username that has at least 4 characters"

  Scenario: Choosing correct email
    When I open "/sign-up"
    And I introduce "foobar@gmail.com" as "email"
    And I click the "Sign up" button
    Then I don't read "Please tell us your email address"

  Scenario: Choosing invalid email
    When I open "/sign-up"
    And I introduce "foobargmail.com" as "email"
    And I click the "Sign up" button
    Then I read "This does not look like a valid email address"

  Scenario: Choosing correct password
    When I open "/sign-up"
    And I introduce "totallyFake-Password-@3" as "password"
    And I click the "Sign up" button
    Then I don't read "Please choose a password"

  Scenario: Choosing correct password and confirmation
    When I open "/sign-up"
    And I introduce "totallyFake-Password-@3" as "password"
    And I introduce "totallyFake-Password-@3" as "password_confirmation"
    And I click the "Sign up" button
    Then I don't read "Please verify your chosen password by repeating it"

  Scenario: Choosing passwords that don't match
    When I open "/sign-up"
    And I introduce "totallyFake-Password-@3" as "password"
    And I introduce "totallyFakepassword-@3" as "password_confirmation"
    And I click the "Sign up" button
    Then I read "The passwords don't match"


  Scenario: Password is too short
    When I open "/sign-up"
    And I introduce "fooba" as "password"
    And I introduce "fooba" as "password_confirmation"
    And I click the "Sign up" button
    Then I read "Your password is too short. Please choose a password that's at least 5 characters long."

  Scenario: Submitting with correct values
    When I open "/sign-up"
    And I introduce "foobar" as "username"
    And I introduce "foobar@gmail.com" as "email"
    And I introduce "totallyFake-Password-@3" as "password"
    And I introduce "totallyFake-Password-@3" as "password_confirmation"
    And I click the "Sign up" button
    Then I should be on "/sign-up-success"

  Scenario: User already exists
    When I open "/sign-up"
    And I introduce "foobar" as "username"
    And I introduce "foobar@gmail.com" as "email"
    And I introduce "totallyFake-Password-@3" as "password"
    And I introduce "totallyFake-Password-@3" as "password_confirmation"
    Given user already exists
    And I click the "Sign up" button
    Then I read "User already exists. Please choose another username."
