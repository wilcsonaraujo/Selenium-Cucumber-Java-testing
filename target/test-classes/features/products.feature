#language: en

@products
Feature: The user can be handle the displayed products

  @products-orderNameAsc
  Scenario: order display of products
    Given User is logged in
    And The user can see the products page
    When The user click to sort products by Name ascending
    Then See the products sorted name ascending

  @products-orderNameDesc
  Scenario: order display of products
    Given User is logged in
    And The user can see the products page
    When The user click to sort products by Name descending
    Then See the products sorted name descending

  @products-orderPriceAsc
  Scenario: order display of products
    Given User is logged in
    And The user can see the products page
    When The user click to sort products by Price ascending
    Then See the products sorted price ascending

  @products-orderPriceDesc
  Scenario: order display of products
    Given User is logged in
    And The user can see the products page
    When The user click to sort products by Price descending
    Then See the products sorted price descending

  @products-addCart
  Scenario: Add products to cart
    Given User is logged in
    When The user click to add some products to your cart
    Then The user can see the current amount of products added in the cart icon

  @products-addAllCart
  Scenario: Add all products to cart
    Given User is logged in
    When The user click to add all products to your cart
    Then The user can see the current amount of products added in the cart icon

  @products-removeCart
  Scenario: Remove some products to cart
    Given User is logged in
    And The user click to add some products to your cart
    And The user can see the button to remove the added product
    And The user can see the amount of products added in the cart icon
    When The user click to remove some products
    Then The user can see the current amount of products added in the cart icon

  @products-removeAllCart
  Scenario: Remove All products to cart
    Given User is logged in
    And The user click to add some products to your cart
    And The user can see the button to remove the added product
    And The user can see the amount of products added in the cart icon
    When The user click to remove all products
    Then The user can see the current amount of products added in the cart icon