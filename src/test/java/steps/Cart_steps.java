package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.CartPage;
import pages.ProductsPage;
import runner.RunCucumberTest;

public class Cart_steps extends RunCucumberTest {

    CartPage cartPage = new CartPage();
    ProductsPage productsPage = new ProductsPage();

    @When("^The user click in cart icon$")
    public void the_user_click_in_cart_icon() {
        cartPage.clickOnCartIcon();
    }

    @When("^The user remove one product from cart$")
    public void the_user_remove_one_product_from_cart() {
        cartPage.removeProductFromCart();
    }

    @Then("^The user can see the current amount of products in the cart$")
    public void the_user_can_see_the_current_amount_of_products_in_the_cart() {
        int cartAmount = productsPage.getAmountCartNumber();
        cartPage.checkQuantityInCart(cartAmount);
    }

    @When("^The user remove some product from cart$")
    public void the_user_remove_some_product_from_cart() {
        cartPage.removeProductsFromCart();
    }

    @When("^User click on continue shopping$")
    public void user_click_on_continue_shopping() {
        cartPage.clickOnContinueShopping();
    }

    @When("^Click on checkout button$")
    public void click_on_checkout_button() {
        cartPage.clickOnCheckoutButton();
    }

}
