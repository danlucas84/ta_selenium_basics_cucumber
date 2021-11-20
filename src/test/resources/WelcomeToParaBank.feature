Feature: Welcome to ParaBank - checking if button / are clickable


  Scenario: clicking home icon



    Given I am in the login page of the Para Bank Application

    When I click home icon

    Then I can move back to main page

    And Page is reload


    Scenario: clicking parent with child icon

      Given I am in the login page of the Para Bank Application

      When I click parent with child icon

      Then I can see ParaSoft Demo Website title

  Scenario: clicking envelop icon

    Given I am in the login page of the Para Bank Application

    When I click envelop icon

    Then I can see  Customer Care title

    And Customer Care form to fill form




