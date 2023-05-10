package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.ItemPage;
import pages.ProductsPage;
import runner.RunCucumberTest;

public class Item_steps extends RunCucumberTest {

    ItemPage itemPage = new ItemPage(driver);
    ProductsPage productsPage = new ProductsPage(driver);

    private int randomItem;
    private String productName;
    private Double productPrice;

    @When("^The user click on some product$")
    public void the_user_click_on_some_product() {
        randomItem = itemPage.getRandomItem();
        productName = itemPage.itemName(randomItem);
        productPrice = itemPage.itemPrice(randomItem);
        itemPage.clickOnProduct(randomItem);
    }

    @Then("^The user can see the product info$")
    public void the_user_can_see_the_product_info() {
        itemPage.verifyItemInfoDisplayed();
    }

    @Then("^check the product name$")
    public void check_the_product_name() {
        itemPage.verifyItemName(productName);
    }

    @Then("^check the product price$")
    public void check_the_product_price() {
        itemPage.verifyItemPrice(productPrice);
    }

    @When("^The user click to add the product to your cart$")
    public void the_user_click_to_add_the_product_to_your_cart() {
        itemPage.clickOnAddToCart();
    }

    @When("^The user click to back the products page$")
    public void the_user_click_to_back_the_products_page() {
        itemPage.clickOnBackToProducts();
    }

    @Given("^the user click on add one product to cart$")
    public void the_user_click_on_add_one_product_to_cart() throws Throwable {
        randomItem = itemPage.getRandomItem();
        productsPage.clickOnAddToCart(randomItem);
    }

    @Given("^The user click on the same product$")
    public void the_user_click_on_the_same_product() throws Throwable {
        itemPage.clickOnProduct(randomItem);
    }

    @When("^The user click to remove the product$")
    public void the_user_click_to_remove_the_product() throws Throwable {
        itemPage.clickOnRemoveToCart();
    }

}
