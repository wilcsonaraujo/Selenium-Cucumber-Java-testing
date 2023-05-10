package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import runner.RunCucumberTest;
import support.Utils;

public class LoginPage extends RunCucumberTest {

    private By login_username_field = By.id("user-name");
    private By login_password_field = By.id("password");
    private By login_button = By.id("login-button");
    private String messageErrorCssSelector = "h3[data-test='error']";
    private String productsTitleXpath = "//span[@class='title']";


    public void accessLoginPage() {
        getDriver().get("https://www.saucedemo.com");
        Utils.waitElementBePresent(login_username_field, 5);
    }

    public void fillUsername(String username) {
        getDriver().findElement(login_username_field).sendKeys(username);
    }

    public void fillPassword(String password) {
        getDriver().findElement(login_password_field).sendKeys(password);
    }

    public void clickLoginBottom() {
        getDriver().findElement(login_button).click();
    }

    public void validateLoginSuccess() {
        String product = getDriver().findElement(By.xpath(productsTitleXpath)).getText();
        Assert.assertEquals("Products", product);
    }

    public void verifyLoginMessageError(String messageError) {
        String message = getDriver().findElement(By.cssSelector(messageErrorCssSelector)).getText();
        Assert.assertEquals(message, messageError);
    }
}
