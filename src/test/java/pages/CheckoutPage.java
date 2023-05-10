package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import support.Utils;

public class CheckoutPage extends Utils {

    WebDriver driver;

    public CheckoutPage(WebDriver driver) {
        this.driver = driver;
    }

    private By continueButton = By.id("continue");
    private By firstName_field = By.id("first-name");
    private By lastName_field = By.id("last-name");
    private By postalCode_field = By.id("postal-code");
    private By cancelButton = By.id("cancel");



    public void clickOnContinueButton() {
        driver.findElement(continueButton).click();
    }

    public void fillFirstName(String username) {
        driver.findElement(firstName_field).sendKeys(username);
    }

    public void fillLastName(String username) {
        driver.findElement(lastName_field).sendKeys(username);
    }

    public void fillPostalCode(String username) {
        driver.findElement(postalCode_field).sendKeys(username);
    }

    public void clickOnCancelButton() {
        driver.findElement(cancelButton).click();
    }

}
