#language: en

@item
Feature: The user can read more information of displayed products

  @item-Info
  Scenario: More information about the product
    Given User is logged in
    When The user click on some product
    Then The user can see the product info
    And check the product name
    And check the product price

  @item-info-addCartAndBackToProductsPage
  Scenario: Add product to a cart
    Given User is logged in
    And The user click on some product
    When The user click to add the product to your cart
    And The user click to back the products page
    Then The user can see the products page
    And The user can see the current amount of products added in the cart icon
    And The user click to remove all products

  @item-info-removeAlreadyAddInProductsPage
  Scenario: Add product in inventory page and remove from info page
    Given User is logged in
    And The user click on add one product to cart
    And The user click on the same product
    When The user click to remove the product
    Then The user can see the current amount of products added in the cart icon

  @item-info-backProductsPage
  Scenario: Back to product page
    Given User is logged in
    And The user click on some product
    When The user click to back the products page
    Then The user can see the products page
