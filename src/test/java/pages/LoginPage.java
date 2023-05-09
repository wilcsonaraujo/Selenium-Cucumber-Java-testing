package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import support.Utils;

public class LoginPage extends Utils {

    WebDriver driver;
    private By login_username_field = By.id("user-name");
    private By login_password_field = By.id("password");
    private By login_button = By.id("login-button");
    private String messageErrorCssSelector = "h3[data-test='error']";
    private String productsTitleXpath = "//span[@class='title']";


    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    public void accessLoginPage() {
        driver.get("https://www.saucedemo.com");
        waitElementBePresent(login_username_field, 5);
    }

    public void fillUsername(String username) {
        driver.findElement(login_username_field).sendKeys(username);
    }

    public void fillPassword(String password) {
        driver.findElement(login_password_field).sendKeys(password);
    }

    public void clickLoginBottom() {
        driver.findElement(login_button).click();
    }

    public void validateLoginSuccess() {
        String product = driver.findElement(By.xpath(productsTitleXpath)).getText();
        Assert.assertEquals("Products", product);
    }

    public void verifyLoginMessageError(String messageError) {
        String message = driver.findElement(By.cssSelector(messageErrorCssSelector)).getText();
        Assert.assertEquals(message, messageError);
    }
}
