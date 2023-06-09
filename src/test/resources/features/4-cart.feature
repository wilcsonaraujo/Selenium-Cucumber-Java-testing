#language: en

@cart
Feature: The user can view shopping cart

  @cart-removeProductToCart
  Scenario: User can remove a product from cart
    Given User is logged in "standard_user" and "secret_sauce"
    And The user click to add some products to your cart
    And The user click in cart icon
    When The user remove one product from cart
    Then The user can see the current amount of products in the cart

  @cart-removeSomeProductsToCart
  Scenario: User can remove some products from cart
    Given User is logged in "standard_user" and "secret_sauce"
    And The user click to add all products to your cart
    And The user click in cart icon
    When The user remove some product from cart
    Then The user can see the current amount of products in the cart

  @cart-continueShopping
  Scenario: User can continue the shopping
    Given User is logged in "standard_user" and "secret_sauce"
    And The user click to add all products to your cart
    And The user click in cart icon
    When User click on continue shopping
    And The user click to remove all products
    And The user click to add some products to your cart
    And The user click in cart icon
    Then The user can see the current amount of products in the cart
