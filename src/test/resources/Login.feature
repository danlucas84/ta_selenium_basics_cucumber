@login
Feature: Login Functionality

  In order to do internet banking
  As a valid Para Bank customer
  I want to login successfully

# Scenario Outline Example

    Scenario Outline: Login Successful scenario outline

    Given I am in the login page of the Para Bank Application
    When I enter valid <username> and <password>
    And click login
    Then I should be taken to the Overview page

    Examples:
      | username     | password   |
      | "autotester" | "password" |
      | "tautester"  | "password" |
      | dan          | test       |


# Scenario for Inline Parameters

  Scenario: Login Successful - Inline Parameters

    Given I am in the login page of the Para Bank Application
    When I enter valid credentials username "dan" and password "test"
    And click login
    Then I should be taken to the Overview page

  Scenario: Login Unsuccessful

    Given I am in the login page of the Para Bank Application
    When I enter invalid credentials username "autotester" and password "password"
    And click login
    Then I should not be taken to the Overview page






