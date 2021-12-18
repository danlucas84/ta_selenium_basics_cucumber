Feature: Welcome to ParaBank - checking if 3 icons  are clickable


  Scenario: clicking home icon



    Given I am in the login page of the Para Bank Application

    When I click home icon

    Then I can move back to main page


  Scenario: clicking parent with child icon

    Given I am in the login page of the Para Bank Application

    When I click parent with child icon

    Then I can see ParaSoft Demo Website title

  Scenario Outline: clicking envelop icon

    Given I am in the login page of the Para Bank Application

    When I click envelop icon

    Then I can see  Customer Care title

    And Customer Care form to fill form with "<Name>", "<Email>", "<Phone>", "<Message>"

    And I click send Message button
    And I can see Thank you "<Name>" Title

    Examples:
      | Name | Email       | Phone | Message         |
      | test | test        | test  | test            |
      | dan  | dan@test.pl | 12345 | testowy message |






