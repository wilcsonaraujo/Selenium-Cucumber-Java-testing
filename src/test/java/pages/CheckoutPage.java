package pages;

import org.openqa.selenium.By;
import runner.RunCucumberTest;

public class CheckoutPage extends RunCucumberTest {

    private By continueButton = By.id("continue");
    private By firstName_field = By.id("first-name");
    private By lastName_field = By.id("last-name");
    private By postalCode_field = By.id("postal-code");
    private By cancelButton = By.id("cancel");
    private String checkoutButton = "(//button[contains(text(),'Checkout')])";


    public void clickOnContinueButton() {
        getDriver().findElement(continueButton).click();
    }

    public void fillFirstName(String username) {
        getDriver().findElement(firstName_field).sendKeys(username);
    }

    public void fillLastName(String username) {
        getDriver().findElement(lastName_field).sendKeys(username);
    }

    public void fillPostalCode(String username) {
        getDriver().findElement(postalCode_field).sendKeys(username);
    }

    public void clickOnCancelButton() {
        getDriver().findElement(cancelButton).click();
    }

    public void verifyCartPage(){
        getDriver().findElement(By.xpath(checkoutButton)).isDisplayed();
    }

}
