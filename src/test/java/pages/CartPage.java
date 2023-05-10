package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import runner.RunCucumberTest;
import support.Utils;

public class CartPage extends RunCucumberTest {


    private By cartIconButton = By.className("shopping_cart_link");
    private By cardList = By.className("cart_item");
    private By continueShoppingButton = By.id("continue-shopping");
    private String removeToCardButtonXpath = "(//button[contains(text(),'Remove')])";
    private String checkoutButton = "(//button[contains(text(),'Checkout')])";
    private By cartIcon = By.id("shopping_cart_container");

    public Integer randomNumber;

    public void clickOnCartIcon() {
        getDriver().findElement(cartIconButton).click();
    }

    public void removeProductFromCart() {
        getDriver().findElement(By.xpath(removeToCardButtonXpath + "[1]")).click();
    }

    public void clickOnCheckoutButton() {
        getDriver().findElement(By.xpath(checkoutButton)).click();
    }

    public void removeProductsFromCart() {
        int cartListSize = Utils.getListSize(cardList);
        randomNumber = Utils.getRandomNumber(cartListSize);
        for (int i = 1; i <= randomNumber; i++) {
            getDriver().findElement(By.xpath(removeToCardButtonXpath + "[" + i + "]")).click();
        }
    }

    public void checkQuantityInCart(int expected) {
        Utils.waitElementBePresent(continueShoppingButton, 5);
        int actual = Utils.getListSize(cardList);
        Assert.assertEquals(expected, actual);
    }

    public void clickOnContinueShopping() {
        getDriver().findElement(continueShoppingButton).click();
    }
}
