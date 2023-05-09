package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;
import pages.ProductsPage;
import runner.RunCucumberTest;

import java.util.ArrayList;
import java.util.List;

public class Products_steps extends RunCucumberTest {

    ProductsPage productsPage = new ProductsPage(driver);
    LoginPage loginPage = new LoginPage(driver);

    String[] orderBy = {"Name (A to Z)", "Name (Z to A)", "Price (low to high)", "Price (high to low)"};
    List<String> productsNameList = new ArrayList<>();
    List<Double> productsPriceList = new ArrayList<>();
    Integer amountNumberCart = 0;

    @Given("^User is logged in$")
    public void user_is_logged_in() {
        loginPage.accessLoginPage();
        loginPage.fillUsername("standard_user");
        loginPage.fillPassword("secret_sauce");
        loginPage.clickLoginBottom();
    }

    @Given("^The user can see the products page$")
    public void the_user_can_see_the_products_page() {
        productsPage.verifyInventory();
    }

    @When("^The user click to sort products by Name ascending$")
    public void the_user_click_to_sort_products_by_Name_ascending() {
        productsNameList = productsPage.getNameProductsList();
        productsPage.selectOrderBy(orderBy[0]);
    }

    @When("^The user click to sort products by Name descending$")
    public void the_user_click_to_sort_products_by_Name_descending() {
        productsNameList = productsPage.getNameProductsList();
        productsPage.selectOrderBy(orderBy[1]);
    }

    @When("^The user click to sort products by Price ascending$")
    public void the_user_click_to_sort_products_by_Price_ascending() {
        productsPriceList = productsPage.getPriceProductsList();
        productsPage.selectOrderBy(orderBy[2]);
    }

    @When("^The user click to sort products by Price descending$")
    public void the_user_click_to_sort_products_by_Price_descending() {
        productsPriceList = productsPage.getPriceProductsList();
        productsPage.selectOrderBy(orderBy[3]);
    }

    @Then("^See the products sorted name ascending$")
    public void see_the_products_sorted_name_ascending() {
        productsPage.verifyNameAscendingOrder(productsNameList);
    }

    @Then("^See the products sorted name descending$")
    public void see_the_products_sorted_name_descending() {
        productsPage.verifyNameDescendingOrder(productsNameList);
    }

    @Then("^See the products sorted price ascending$")
    public void see_the_products_sorted_price_ascending() {
        productsPage.verifyPriceAscendingOrder(productsPriceList);
    }

    @Then("^See the products sorted price descending$")
    public void see_the_products_sorted_price_descending() {
        productsPage.verifyPriceDescendingOrder(productsPriceList);
    }

    @When("^The user click to add some products to your cart$")
    public void the_user_click_to_add_some_products_to_your_cart() {
        productsPage.clickOnAddSomeProductToCart();
    }

    @Then("^The user can see the current amount of products added in the cart icon$")
    public void the_user_can_see_the_current_amount_of_products_added_in_the_cart_icon() {
        amountNumberCart = productsPage.getAmountCartNumber();
        productsPage.verifyAmongProductsCart(amountNumberCart);
    }

    @Given("^The user can see the button to remove the added product$")
    public void the_user_can_see_the_button_to_remove_the_added_product() {
        productsPage.removeButtonIsVisible();
    }

    @Given("^The user can see the amount of products added in the cart icon$")
    public void the_user_can_see_the_amount_of_products_added_in_the_cart_icon() {
        amountNumberCart = productsPage.getAmountCartNumber();
    }

    @When("^The user click to remove all products$")
    public void the_user_click_to_remove_some_products() {
        productsPage.clickOnRemoveToCart();
    }
    @When("^The user click to add All products to your cart$")
    public void the_user_click_to_add_All_products_to_your_cart() {
        productsPage.clickOnAddAllProductToCart();
    }
}
