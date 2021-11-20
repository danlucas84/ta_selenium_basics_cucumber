Feature: Register Functionality

  In order to do internet banking
  As a valid Para Bank customer
  I want to register account successfully

  Background:
    Given I am in the login page of the Para Bank Application

  # Scenario Example
  @Register
  Scenario: Register Successful

    When I click register on the left menu
    And  I fill form
      | First Name | Last Name | Address | City | Zip Code | "Phone | SSN  | Username | Password | Confirm |
      | test       | test      | test    | test | test     | test   | test | dan      | test     | test    |
    And I click register button in the form
    Then you can see text "Welcome dan" and "Your account was created successfully. You are now logged in"


