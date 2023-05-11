#language: en

@login
Feature: User login

  @login-success
  Scenario: Login success
    Given the user is on login page
    And the user enters valid username "standard_user"
    And the user enters valid password "secret_sauce"
    When click on login button
    Then the user should be redirected to the products page


  @login-empty
  Scenario: Login with user info empty
    Given the user is on login page
    When click on login button
    Then user should get error message "Epic sadface: Username is required"

  @login-username-empty
  Scenario: Login with username empty
    Given the user is on login page
    And the user enters valid password "secret_sauce"
    When click on login button
    Then user should get error message "Epic sadface: Username is required"

  @login-password-empty
  Scenario: Login with password empty
    Given the user is on login page
    And the user enters valid username "standard_user"
    When click on login button
    Then user should get error message "Epic sadface: Password is required"

  @login-invalid
  Scenario: Login with invalid user info
    Given the user is on login page
    And the user enters invalid username "Cris_user"
    And the user enters invalid password "secret_password"
    When click on login button
    Then user should get error message "Epic sadface: Username and password do not match any user in this service"
