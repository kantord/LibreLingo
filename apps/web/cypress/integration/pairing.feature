Feature: Word Pairing Challenge

  A challenge type where the user has to pair words and the English translation of them

  Scenario: Getting a Word Pairing Challenge
    Given I open "______"
    Then pairing challenge looks correct
    And I see 10 cards (5 in Spanish, 5 in English)
    And I see a panel with only a Skip and a Cancel button
    And I don't see a "Submit" button

  Scenario: Submitting the correct pairing
    Given I open "______"
    And I create a correct pairing
    And I click "Submit"
    Then I read "Correct pairing"
    And I continue until all pairs are made

  Scenario: Submitting an Incorrect Pairing
    Given I open "______"
    And I incorrectly match a pair
    And I click "Submit"
    Then I read "Incorrect pair"
    And I see the pair of words able to be selected again to try again

