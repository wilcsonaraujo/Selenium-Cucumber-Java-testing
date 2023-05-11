#language: en

@checkout
Feature: The user can buy the products

  @checkout-addUserInfo
  Scenario: Input user info
    Given User is logged in "standard_user" and "secret_sauce"
    And The user click to add some products to your cart
    And The user click in cart icon
    When Click on checkout button
    And The user enters your first name
    And The user enters your last name
    And The user enters your postal code
    And Click on continue button
    Then User can see the purchase order

  @checkout-continueFirstNameEmpty
  Scenario: User info empty - First Name
    Given User is logged in "standard_user" and "secret_sauce"
    And The user click to add some products to your cart
    And The user click in cart icon
    When Click on checkout button
    And Click on continue button
    Then user should get error message "Error: First Name is required"

  @checkout-continueLastNameEmpty
  Scenario: User info empty - Last Name
    Given User is logged in "standard_user" and "secret_sauce"
    And The user click to add some products to your cart
    And The user click in cart icon
    When Click on checkout button
    And The user enters your first name
    And Click on continue button
    Then user should get error message "Error: Last Name is required"

  @checkout-continueZipEmpty
  Scenario: User info empty - Zip Postal
    Given User is logged in "standard_user" and "secret_sauce"
    And The user click to add some products to your cart
    And The user click in cart icon
    When Click on checkout button
    And The user enters your first name
    And The user enters your last name
    And Click on continue button
    Then user should get error message "Error: Postal Code is required"

  @checkout-cancel
  Scenario: User can cancel order
    Given User is logged in "standard_user" and "secret_sauce"
    And The user click to add some products to your cart
    And The user click in cart icon
    When Click on checkout button
    And Click on cancel button
    Then The user see all products in the cart