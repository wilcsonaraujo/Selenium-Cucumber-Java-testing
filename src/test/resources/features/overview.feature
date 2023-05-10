#language: en

@overview
Feature: The user can see the purchase order

  @overview-itemTotal
  Scenario: The user can see items total price
    Given User is logged in
    And The user click to add some products to your cart
    And The user click in cart icon
    And The user see all products in the cart
    When Click on checkout button
    And The user enters your first name
    And The user enters your last name
    And The user enters your postal code
    And Click on continue button
    And User can see the purchase order
    Then user can see the item total price

  @overview-totalPrice
  Scenario: The user can see items total price
    Given User is logged in
    And The user click to add some products to your cart
    And The user click in cart icon
    And The user see all products in the cart
    When Click on checkout button
    And The user enters your first name
    And The user enters your last name
    And The user enters your postal code
    And Click on continue button
    And User can see the purchase order
    Then user can see the total price

  @overview-cancel
  Scenario: User can cancel order
    Given User is logged in
    And The user click to add some products to your cart
    And The user click in cart icon
    And The user see all products in the cart
    When Click on checkout button
    And Click on cancel button
    Then The user can see the products page

  @overview-finish
  Scenario: The user can finish the order
    Given User is logged in
    And The user click to add some products to your cart
    And The user click in cart icon
    And The user see all products in the cart
    When Click on checkout button
    And The user enters your first name
    And The user enters your last name
    And The user enters your postal code
    And Click on continue button
    And User can see the purchase order
    Then User can finished your order
    And user should get success message "Thank you for your order!"