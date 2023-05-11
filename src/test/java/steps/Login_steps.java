package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pages.LoginPage;
import runner.RunBase;
import runner.RunCucumberTest;

public class Login_steps extends RunCucumberTest {

    LoginPage loginPage = new LoginPage();


    @Given("^User is logged in$")
    public void user_is_logged_in() {
        getDriver(RunBase.Browser.CHROME);
        loginPage.accessLoginPage();
        loginPage.fillUsername("standard_user");
        loginPage.fillPassword("secret_sauce");
        loginPage.clickLoginBottom();
    }

    @Given("^the user is on login page$")
    public void the_user_is_on_login_page() {
        getDriver(RunBase.Browser.CHROME);
        loginPage.accessLoginPage();
    }

    @Given("^the user enters valid username \"([^\"]*)\"$")
    public void the_user_enters_valid_username(String username) {loginPage.fillUsername(username);
    }

    @Given("^the user enters valid password \"([^\"]*)\"$")
    public void the_user_enters_valid_password(String password) {
        loginPage.fillPassword(password);
    }

    @Given("^the user enters invalid username \"([^\"]*)\"$")
    public void the_user_enters_invalid_username(String username) {
        loginPage.fillUsername(username);
    }

    @Given("^the user enters invalid password \"([^\"]*)\"$")
    public void the_user_enters_invalid_password(String password) {
        loginPage.fillPassword(password);
    }

    @When("^click on login button$")
    public void click_on_login_button() {
        loginPage.clickLoginBottom();
    }

    @Then("^the user should be redirected to the products page$")
    public void the_user_should_be_redirected_to_the_products_page() {
        loginPage.validateLoginSuccess();
    }

    @Then("^user should get error message \"([^\"]*)\"$")
    public void user_should_get_error_message(String messageError) {
        loginPage.verifyLoginMessageError(messageError);
    }

}
