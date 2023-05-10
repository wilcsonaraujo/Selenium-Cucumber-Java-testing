package steps;

import cucumber.api.java.en.Then;
import pages.OverviewPage;
import runner.RunCucumberTest;

public class Overview_steps extends RunCucumberTest {

    OverviewPage overviewPage = new OverviewPage(driver);

    @Then("^user can see the item total price$")
    public void user_can_see_the_item_total_price() {
        overviewPage.checkItemTotal();
    }

    @Then("^user can see the total price$")
    public void user_can_see_the_total_price() {
        overviewPage.checkTotalPrice();
    }

    @Then("^User can finished your order$")
    public void user_can_finished_your_order() {
        overviewPage.finishOrder();
    }

    @Then("^user should get success message \"([^\"]*)\"$")
    public void user_should_get_success_message(String message) {
        overviewPage.verifySuccessMessage(message);
    }
}
