package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import support.Utils;

public class CartPage extends Utils {

    WebDriver driver;

    public CartPage(WebDriver driver) {
        this.driver = driver;
    }

    private By cartIconButton = By.className("shopping_cart_link");
    private By cardList = By.className("cart_item");
    private By continueShoppingButton = By.id("continue-shopping");
    private String removeToCardButtonXpath = "(//button[contains(text(),'Remove')])";
    private String checkoutButton = "(//button[contains(text(),'Checkout')])";
    private By cartIcon = By.id("shopping_cart_container");

    public Integer randomNumber;

    public void clickOnCartIcon() {
        driver.findElement(cartIconButton).click();
    }

    public void cartListDisplayed() {
        driver.findElement(cardList).isDisplayed();
    }

    public void removeProductFromCart() {
        driver.findElement(By.xpath(removeToCardButtonXpath + "[1]")).click();
    }

    public void clickOnCheckoutButton() {
        driver.findElement(By.xpath(checkoutButton)).click();
    }

    public void removeProductsFromCart() {
        int cartListSize = getListSize(cardList);
        randomNumber = getRandomNumber(cartListSize);
        for (int i = 1; i <= randomNumber; i++) {
            driver.findElement(By.xpath(removeToCardButtonXpath + "[" + i + "]")).click();
        }
    }

    public void checkQuantityInCart() {
        waitElementBePresent(continueShoppingButton, 5);
        int expected = Integer.parseInt(driver.findElement(cartIcon).getText());
        int actual = getListSize(cardList);
        Assert.assertEquals(expected, actual);
    }

    public void clickOnContinueShopping() {
        driver.findElement(continueShoppingButton).click();
    }
}
