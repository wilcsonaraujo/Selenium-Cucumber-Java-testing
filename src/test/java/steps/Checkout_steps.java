package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.CartPage;
import pages.CheckoutPage;
import pages.OverviewPage;
import runner.RunCucumberTest;

public class Checkout_steps extends RunCucumberTest {
    CheckoutPage checkoutPage = new CheckoutPage();
    OverviewPage overviewPage = new OverviewPage();

    private String[] userInfoArray = {"Hermione", "Granger", "32831"};


    @When("^Click on continue button$")
    public void click_on_continue_button() {
        checkoutPage.clickOnContinueButton();
    }

    @When("^The user enters your first name$")
    public void the_user_enters_your_first_name() {
        checkoutPage.fillFirstName(userInfoArray[0]);
    }

    @When("^The user enters your last name$")
    public void the_user_enters_your_last_name() {
        checkoutPage.fillLastName(userInfoArray[1]);
    }

    @When("^The user enters your postal code$")
    public void the_user_enters_your_postal_code() {
        checkoutPage.fillPostalCode(userInfoArray[2]);
    }

    @When("^Click on cancel button$")
    public void click_on_cancel_button() {
        checkoutPage.clickOnCancelButton();
    }

    @Then("^User can see the purchase order$")
    public void user_can_see_the_purchase_order() {
        overviewPage.overviewDisplayed();
    }
}
