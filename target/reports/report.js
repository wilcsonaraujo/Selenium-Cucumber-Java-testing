$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1-login_user.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: en"
    }
  ],
  "line": 4,
  "name": "User login",
  "description": "",
  "id": "user-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Login success",
  "description": "",
  "id": "user-login;login-success",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@login-success"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "the user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user enters valid username \"standard_user\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user enters valid password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the user should be redirected to the products page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.the_user_is_on_login_page()"
});
formatter.result({
  "duration": 2912139900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 32
    }
  ],
  "location": "Login_steps.the_user_enters_valid_username(String)"
});
formatter.result({
  "duration": 106025700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 32
    }
  ],
  "location": "Login_steps.the_user_enters_valid_password(String)"
});
formatter.result({
  "duration": 111727400,
  "status": "passed"
});
formatter.match({
  "location": "Login_steps.click_on_login_button()"
});
formatter.result({
  "duration": 170258600,
  "status": "passed"
});
formatter.match({
  "location": "Login_steps.the_user_should_be_redirected_to_the_products_page()"
});
formatter.result({
  "duration": 43456000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login with user info empty",
  "description": "",
  "id": "user-login;login-with-user-info-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@login-empty"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "the user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user should get error message \"Epic sadface: Username is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.the_user_is_on_login_page()"
});
formatter.result({
  "duration": 2490280000,
  "status": "passed"
});
formatter.match({
  "location": "Login_steps.click_on_login_button()"
});
formatter.result({
  "duration": 112304300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 31
    }
  ],
  "location": "Login_steps.user_should_get_error_message(String)"
});
formatter.result({
  "duration": 36537100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login with username empty",
  "description": "",
  "id": "user-login;login-with-username-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@login-username-empty"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "the user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the user enters valid password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user should get error message \"Epic sadface: Username is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.the_user_is_on_login_page()"
});
formatter.result({
  "duration": 2331632500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 32
    }
  ],
  "location": "Login_steps.the_user_enters_valid_password(String)"
});
formatter.result({
  "duration": 114698900,
  "status": "passed"
});
formatter.match({
  "location": "Login_steps.click_on_login_button()"
});
formatter.result({
  "duration": 70830400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 31
    }
  ],
  "location": "Login_steps.user_should_get_error_message(String)"
});
formatter.result({
  "duration": 49725800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Login with password empty",
  "description": "",
  "id": "user-login;login-with-password-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@login-password-empty"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "the user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "the user enters valid username \"standard_user\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user should get error message \"Epic sadface: Password is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.the_user_is_on_login_page()"
});
formatter.result({
  "duration": 2424586800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 32
    }
  ],
  "location": "Login_steps.the_user_enters_valid_username(String)"
});
formatter.result({
  "duration": 102090800,
  "status": "passed"
});
formatter.match({
  "location": "Login_steps.click_on_login_button()"
});
formatter.result({
  "duration": 76122400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 31
    }
  ],
  "location": "Login_steps.user_should_get_error_message(String)"
});
formatter.result({
  "duration": 45536800,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Login with invalid user info",
  "description": "",
  "id": "user-login;login-with-invalid-user-info",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@login-invalid"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "the user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "the user enters invalid username \"Cris_user\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the user enters invalid password \"secret_password\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "user should get error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.the_user_is_on_login_page()"
});
formatter.result({
  "duration": 2389432000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cris_user",
      "offset": 34
    }
  ],
  "location": "Login_steps.the_user_enters_invalid_username(String)"
});
formatter.result({
  "duration": 91251800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_password",
      "offset": 34
    }
  ],
  "location": "Login_steps.the_user_enters_invalid_password(String)"
});
formatter.result({
  "duration": 93927400,
  "status": "passed"
});
formatter.match({
  "location": "Login_steps.click_on_login_button()"
});
formatter.result({
  "duration": 100995500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 31
    }
  ],
  "location": "Login_steps.user_should_get_error_message(String)"
});
formatter.result({
  "duration": 64755100,
  "status": "passed"
});
formatter.uri("2-products.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: en"
    }
  ],
  "line": 4,
  "name": "The user can be handle the displayed products",
  "description": "",
  "id": "the-user-can-be-handle-the-displayed-products",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@products"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "order display of products",
  "description": "",
  "id": "the-user-can-be-handle-the-displayed-products;order-display-of-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@products-orderNameAsc"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The user can see the products page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The user click to sort products by Name ascending",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "See the products sorted name ascending",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2825016900,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_products_page()"
});
formatter.result({
  "duration": 61963500,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_sort_products_by_Name_ascending()"
});
formatter.result({
  "duration": 163443900,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.see_the_products_sorted_name_ascending()"
});
formatter.result({
  "duration": 83226900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "order display of products",
  "description": "",
  "id": "the-user-can-be-handle-the-displayed-products;order-display-of-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@products-orderNameDesc"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "The user can see the products page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "The user click to sort products by Name descending",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "See the products sorted name descending",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2715103500,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_products_page()"
});
formatter.result({
  "duration": 52404400,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_sort_products_by_Name_descending()"
});
formatter.result({
  "duration": 207455600,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.see_the_products_sorted_name_descending()"
});
formatter.result({
  "duration": 98483500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "order display of products",
  "description": "",
  "id": "the-user-can-be-handle-the-displayed-products;order-display-of-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@products-orderPriceAsc"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "The user can see the products page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "The user click to sort products by Price ascending",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "See the products sorted price ascending",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2777170700,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_products_page()"
});
formatter.result({
  "duration": 50675500,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_sort_products_by_Price_ascending()"
});
formatter.result({
  "duration": 195235800,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.see_the_products_sorted_price_ascending()"
});
formatter.result({
  "duration": 96960900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "order display of products",
  "description": "",
  "id": "the-user-can-be-handle-the-displayed-products;order-display-of-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@products-orderPriceDesc"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "The user can see the products page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "The user click to sort products by Price descending",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "See the products sorted price descending",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2702178200,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_products_page()"
});
formatter.result({
  "duration": 64034700,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_sort_products_by_Price_descending()"
});
formatter.result({
  "duration": 221811000,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.see_the_products_sorted_price_descending()"
});
formatter.result({
  "duration": 99630400,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Add products to cart",
  "description": "",
  "id": "the-user-can-be-handle-the-displayed-products;add-products-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@products-addCart"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "The user click to add some products to your cart",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "The user can see the current amount of products added in the cart icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2686525200,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_some_products_to_your_cart()"
});
formatter.result({
  "duration": 246716600,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_current_amount_of_products_added_in_the_cart_icon()"
});
formatter.result({
  "duration": 132125100,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Add all products to cart",
  "description": "",
  "id": "the-user-can-be-handle-the-displayed-products;add-all-products-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@products-addAllCart"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "The user click to add all products to your cart",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "The user can see the current amount of products added in the cart icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2667460300,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_All_products_to_your_cart()"
});
formatter.result({
  "duration": 481163000,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_current_amount_of_products_added_in_the_cart_icon()"
});
formatter.result({
  "duration": 146198300,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Remove some products to cart",
  "description": "",
  "id": "the-user-can-be-handle-the-displayed-products;remove-some-products-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@products-removeCart"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "The user click to add some products to your cart",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "The user can see the button to remove the added product",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "The user can see the amount of products added in the cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "The user click to remove some products",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "The user can see the current amount of products added in the cart icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2701630600,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_some_products_to_your_cart()"
});
formatter.result({
  "duration": 143855700,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_button_to_remove_the_added_product()"
});
formatter.result({
  "duration": 78895700,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_amount_of_products_added_in_the_cart_icon()"
});
formatter.result({
  "duration": 33942400,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_remove_some_products()"
});
formatter.result({
  "duration": 84558300,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_current_amount_of_products_added_in_the_cart_icon()"
});
formatter.result({
  "duration": 99459000,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Remove All products to cart",
  "description": "",
  "id": "the-user-can-be-handle-the-displayed-products;remove-all-products-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@products-removeAllCart"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "The user click to add some products to your cart",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "The user can see the button to remove the added product",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "The user can see the amount of products added in the cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "The user click to remove all products",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "The user can see the current amount of products added in the cart icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2775193800,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_some_products_to_your_cart()"
});
formatter.result({
  "duration": 21731800,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_button_to_remove_the_added_product()"
});
formatter.result({
  "duration": 83111600,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_amount_of_products_added_in_the_cart_icon()"
});
formatter.result({
  "duration": 27849600,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_remove_all_products()"
});
formatter.result({
  "duration": 60898900,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_current_amount_of_products_added_in_the_cart_icon()"
});
formatter.result({
  "duration": 84446900,
  "status": "passed"
});
formatter.uri("3-item.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: en"
    }
  ],
  "line": 4,
  "name": "The user can read more information of displayed products",
  "description": "",
  "id": "the-user-can-read-more-information-of-displayed-products",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@item"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "More information about the product",
  "description": "",
  "id": "the-user-can-read-more-information-of-displayed-products;more-information-about-the-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@item-Info"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The user click on some product",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "The user can see the product info",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "check the product name",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "check the product price",
  "keyword": "And "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2816771600,
  "status": "passed"
});
formatter.match({
  "location": "Item_steps.the_user_click_on_some_product()"
});
formatter.result({
  "duration": 205222900,
  "status": "passed"
});
formatter.match({
  "location": "Item_steps.the_user_can_see_the_product_info()"
});
formatter.result({
  "duration": 49285600,
  "status": "passed"
});
formatter.match({
  "location": "Item_steps.check_the_product_name()"
});
formatter.result({
  "duration": 22658500,
  "status": "passed"
});
formatter.match({
  "location": "Item_steps.check_the_product_price()"
});
formatter.result({
  "duration": 32578500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add product to a cart",
  "description": "",
  "id": "the-user-can-read-more-information-of-displayed-products;add-product-to-a-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@item-info-addCartAndBackToProductsPage"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "The user click on some product",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The user click to add the product to your cart",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The user click to back the products page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "The user can see the products page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "The user can see the current amount of products added in the cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "The user click to remove all products",
  "keyword": "And "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2695920100,
  "status": "passed"
});
formatter.match({
  "location": "Item_steps.the_user_click_on_some_product()"
});
formatter.result({
  "duration": 221398600,
  "status": "passed"
});
formatter.match({
  "location": "Item_steps.the_user_click_to_add_the_product_to_your_cart()"
});
formatter.result({
  "duration": 59478500,
  "status": "passed"
});
formatter.match({
  "location": "Item_steps.the_user_click_to_back_the_products_page()"
});
formatter.result({
  "duration": 74731300,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_products_page()"
});
formatter.result({
  "duration": 55409200,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_current_amount_of_products_added_in_the_cart_icon()"
});
formatter.result({
  "duration": 132927100,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_remove_all_products()"
});
formatter.result({
  "duration": 130842900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Add product in inventory page and remove from info page",
  "description": "",
  "id": "the-user-can-read-more-information-of-displayed-products;add-product-in-inventory-page-and-remove-from-info-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@item-info-removeAlreadyAddInProductsPage"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "The user click on add one product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "The user click on the same product",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The user click to remove the product",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "The user can see the current amount of products added in the cart icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2781000800,
  "status": "passed"
});
formatter.match({
  "location": "Item_steps.the_user_click_on_add_one_product_to_cart()"
});
formatter.result({
  "duration": 128668200,
  "status": "passed"
});
formatter.match({
  "location": "Item_steps.the_user_click_on_the_same_product()"
});
formatter.result({
  "duration": 70720600,
  "status": "passed"
});
formatter.match({
  "location": "Item_steps.the_user_click_to_remove_the_product()"
});
formatter.result({
  "duration": 51481000,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_current_amount_of_products_added_in_the_cart_icon()"
});
formatter.result({
  "duration": 69134900,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Back to product page",
  "description": "",
  "id": "the-user-can-read-more-information-of-displayed-products;back-to-product-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@item-info-backProductsPage"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "The user click on some product",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "The user click to back the products page",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The user can see the products page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2708957800,
  "status": "passed"
});
formatter.match({
  "location": "Item_steps.the_user_click_on_some_product()"
});
formatter.result({
  "duration": 204933700,
  "status": "passed"
});
formatter.match({
  "location": "Item_steps.the_user_click_to_back_the_products_page()"
});
formatter.result({
  "duration": 62697900,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_products_page()"
});
formatter.result({
  "duration": 45242100,
  "status": "passed"
});
formatter.uri("4-cart.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: en"
    }
  ],
  "line": 4,
  "name": "The user can view shopping cart",
  "description": "",
  "id": "the-user-can-view-shopping-cart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@cart"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "User can remove a product from cart",
  "description": "",
  "id": "the-user-can-view-shopping-cart;user-can-remove-a-product-from-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@cart-removeProductToCart"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The user click to add some products to your cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The user click in cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "The user remove one product from cart",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The user can see the current amount of products in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2634568700,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_some_products_to_your_cart()"
});
formatter.result({
  "duration": 127137600,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_click_in_cart_icon()"
});
formatter.result({
  "duration": 67289100,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_remove_one_product_from_cart()"
});
formatter.result({
  "duration": 50562100,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_can_see_the_current_amount_of_products_in_the_cart()"
});
formatter.result({
  "duration": 115372600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User can remove some products from cart",
  "description": "",
  "id": "the-user-can-view-shopping-cart;user-can-remove-some-products-from-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@cart-removeSomeProductsToCart"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "The user click to add all products to your cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The user click in cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "The user remove some product from cart",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The user can see the current amount of products in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2760087000,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_All_products_to_your_cart()"
});
formatter.result({
  "duration": 363334400,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_click_in_cart_icon()"
});
formatter.result({
  "duration": 81954400,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_remove_some_product_from_cart()"
});
formatter.result({
  "duration": 17930000,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_can_see_the_current_amount_of_products_in_the_cart()"
});
formatter.result({
  "duration": 122408100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User can continue the shopping",
  "description": "",
  "id": "the-user-can-view-shopping-cart;user-can-continue-the-shopping",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@cart-continueShopping"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "The user click to add all products to your cart",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "The user click in cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click on continue shopping",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "The user click to remove all products",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The user click to add some products to your cart",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "The user click in cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "The user can see the current amount of products in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2684812400,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_All_products_to_your_cart()"
});
formatter.result({
  "duration": 397279800,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_click_in_cart_icon()"
});
formatter.result({
  "duration": 78345100,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.user_click_on_continue_shopping()"
});
formatter.result({
  "duration": 90575700,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_remove_all_products()"
});
formatter.result({
  "duration": 540417800,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_some_products_to_your_cart()"
});
formatter.result({
  "duration": 233012400,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_click_in_cart_icon()"
});
formatter.result({
  "duration": 86796900,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_can_see_the_current_amount_of_products_in_the_cart()"
});
formatter.result({
  "duration": 94197100,
  "status": "passed"
});
formatter.uri("5-checkout.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: en"
    }
  ],
  "line": 4,
  "name": "The user can buy the products",
  "description": "",
  "id": "the-user-can-buy-the-products",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@checkout"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Input user info",
  "description": "",
  "id": "the-user-can-buy-the-products;input-user-info",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@checkout-addUserInfo"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The user click to add some products to your cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The user click in cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The user enters your first name",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user enters your last name",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The user enters your postal code",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User can see the purchase order",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2661789400,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_some_products_to_your_cart()"
});
formatter.result({
  "duration": 197826300,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_click_in_cart_icon()"
});
formatter.result({
  "duration": 56972300,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.click_on_checkout_button()"
});
formatter.result({
  "duration": 58854900,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.the_user_enters_your_first_name()"
});
formatter.result({
  "duration": 106706800,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.the_user_enters_your_last_name()"
});
formatter.result({
  "duration": 92404600,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.the_user_enters_your_postal_code()"
});
formatter.result({
  "duration": 81188400,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.click_on_continue_button()"
});
formatter.result({
  "duration": 90783300,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.user_can_see_the_purchase_order()"
});
formatter.result({
  "duration": 58790800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User info empty - First Name",
  "description": "",
  "id": "the-user-can-buy-the-products;user-info-empty---first-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@checkout-continueFirstNameEmpty"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "The user click to add some products to your cart",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "The user click in cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user should get error message \"Error: First Name is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2653324300,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_some_products_to_your_cart()"
});
formatter.result({
  "duration": 21154900,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_click_in_cart_icon()"
});
formatter.result({
  "duration": 54810500,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.click_on_checkout_button()"
});
formatter.result({
  "duration": 59298300,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.click_on_continue_button()"
});
formatter.result({
  "duration": 68232600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Error: First Name is required",
      "offset": 31
    }
  ],
  "location": "Login_steps.user_should_get_error_message(String)"
});
formatter.result({
  "duration": 25764400,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User info empty - Last Name",
  "description": "",
  "id": "the-user-can-buy-the-products;user-info-empty---last-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@checkout-continueLastNameEmpty"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "The user click to add some products to your cart",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "The user click in cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click on checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "The user enters your first name",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user should get error message \"Error: Last Name is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2661733500,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_some_products_to_your_cart()"
});
formatter.result({
  "duration": 363728500,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_click_in_cart_icon()"
});
formatter.result({
  "duration": 78806700,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.click_on_checkout_button()"
});
formatter.result({
  "duration": 88940000,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.the_user_enters_your_first_name()"
});
formatter.result({
  "duration": 101226400,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.click_on_continue_button()"
});
formatter.result({
  "duration": 90751600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Error: Last Name is required",
      "offset": 31
    }
  ],
  "location": "Login_steps.user_should_get_error_message(String)"
});
formatter.result({
  "duration": 33338800,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "User info empty - Zip Postal",
  "description": "",
  "id": "the-user-can-buy-the-products;user-info-empty---zip-postal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@checkout-continueZipEmpty"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "The user click to add some products to your cart",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The user click in cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click on checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "The user enters your first name",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "The user enters your last name",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user should get error message \"Error: Postal Code is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2747329900,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_some_products_to_your_cart()"
});
formatter.result({
  "duration": 311769500,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_click_in_cart_icon()"
});
formatter.result({
  "duration": 88799300,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.click_on_checkout_button()"
});
formatter.result({
  "duration": 90968700,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.the_user_enters_your_first_name()"
});
formatter.result({
  "duration": 108758100,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.the_user_enters_your_last_name()"
});
formatter.result({
  "duration": 96133500,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.click_on_continue_button()"
});
formatter.result({
  "duration": 75026700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Error: Postal Code is required",
      "offset": 31
    }
  ],
  "location": "Login_steps.user_should_get_error_message(String)"
});
formatter.result({
  "duration": 29583700,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "User can cancel order",
  "description": "",
  "id": "the-user-can-buy-the-products;user-can-cancel-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@checkout-cancel"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "The user click to add some products to your cart",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "The user click in cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Click on checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "Click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "The user see all products in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2821036700,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_some_products_to_your_cart()"
});
formatter.result({
  "duration": 241756500,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_click_in_cart_icon()"
});
formatter.result({
  "duration": 79298000,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.click_on_checkout_button()"
});
formatter.result({
  "duration": 89229500,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.click_on_cancel_button()"
});
formatter.result({
  "duration": 77921000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("6-overview.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: en"
    }
  ],
  "line": 4,
  "name": "The user can see the purchase order",
  "description": "",
  "id": "the-user-can-see-the-purchase-order",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@overview"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "The user can see items total price",
  "description": "",
  "id": "the-user-can-see-the-purchase-order;the-user-can-see-items-total-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@overview-itemTotal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The user click to add some products to your cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The user click in cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The user enters your first name",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user enters your last name",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The user enters your postal code",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User can see the purchase order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user can see the item total price",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2731967900,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_some_products_to_your_cart()"
});
formatter.result({
  "duration": 212093500,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_click_in_cart_icon()"
});
formatter.result({
  "duration": 77420300,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.click_on_checkout_button()"
});
formatter.result({
  "duration": 83619800,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.the_user_enters_your_first_name()"
});
formatter.result({
  "duration": 126043700,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.the_user_enters_your_last_name()"
});
formatter.result({
  "duration": 102543400,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.the_user_enters_your_postal_code()"
});
formatter.result({
  "duration": 98034700,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.click_on_continue_button()"
});
formatter.result({
  "duration": 91900800,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.user_can_see_the_purchase_order()"
});
formatter.result({
  "duration": 63232400,
  "status": "passed"
});
formatter.match({
  "location": "Overview_steps.user_can_see_the_item_total_price()"
});
formatter.result({
  "duration": 106064000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "The user can see items total price",
  "description": "",
  "id": "the-user-can-see-the-purchase-order;the-user-can-see-items-total-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@overview-totalPrice"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "The user click to add some products to your cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "The user click in cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The user enters your first name",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "The user enters your last name",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "The user enters your postal code",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User can see the purchase order",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user can see the total price",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2828501900,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_some_products_to_your_cart()"
});
formatter.result({
  "duration": 308555700,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_click_in_cart_icon()"
});
formatter.result({
  "duration": 80464200,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.click_on_checkout_button()"
});
formatter.result({
  "duration": 90615200,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.the_user_enters_your_first_name()"
});
formatter.result({
  "duration": 102433600,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.the_user_enters_your_last_name()"
});
formatter.result({
  "duration": 119277800,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.the_user_enters_your_postal_code()"
});
formatter.result({
  "duration": 126216000,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.click_on_continue_button()"
});
formatter.result({
  "duration": 119442400,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.user_can_see_the_purchase_order()"
});
formatter.result({
  "duration": 73823800,
  "status": "passed"
});
formatter.match({
  "location": "Overview_steps.user_can_see_the_total_price()"
});
formatter.result({
  "duration": 156599700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "User can cancel order",
  "description": "",
  "id": "the-user-can-see-the-purchase-order;user-can-cancel-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@overview-cancel"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "The user click to add some products to your cart",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "The user click in cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Click on checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "The user can see the products page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2854267200,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_some_products_to_your_cart()"
});
formatter.result({
  "duration": 179987000,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_click_in_cart_icon()"
});
formatter.result({
  "duration": 69993600,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.click_on_checkout_button()"
});
formatter.result({
  "duration": 61947400,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.click_on_cancel_button()"
});
formatter.result({
  "duration": 61468100,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_can_see_the_products_page()"
});
formatter.result({
  "duration": 65497800,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "The user can finish the order",
  "description": "",
  "id": "the-user-can-see-the-purchase-order;the-user-can-finish-the-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@overview-finish"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "The user click to add some products to your cart",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "The user click in cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Click on checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "The user enters your first name",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "The user enters your last name",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "The user enters your postal code",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User can see the purchase order",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User can finished your order",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "user should get success message \"Thank you for your order!\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_steps.user_is_logged_in()"
});
formatter.result({
  "duration": 2744388100,
  "status": "passed"
});
formatter.match({
  "location": "Products_steps.the_user_click_to_add_some_products_to_your_cart()"
});
formatter.result({
  "duration": 278440300,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.the_user_click_in_cart_icon()"
});
formatter.result({
  "duration": 76652200,
  "status": "passed"
});
formatter.match({
  "location": "Cart_steps.click_on_checkout_button()"
});
formatter.result({
  "duration": 93609100,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.the_user_enters_your_first_name()"
});
formatter.result({
  "duration": 124170900,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.the_user_enters_your_last_name()"
});
formatter.result({
  "duration": 113975700,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.the_user_enters_your_postal_code()"
});
formatter.result({
  "duration": 98822700,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.click_on_continue_button()"
});
formatter.result({
  "duration": 90881600,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_steps.user_can_see_the_purchase_order()"
});
formatter.result({
  "duration": 63199800,
  "status": "passed"
});
formatter.match({
  "location": "Overview_steps.user_can_finished_your_order()"
});
formatter.result({
  "duration": 89756300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for your order!",
      "offset": 33
    }
  ],
  "location": "Overview_steps.user_should_get_success_message(String)"
});
formatter.result({
  "duration": 46676100,
  "status": "passed"
});
});