package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import support.Utils;


public class ItemPage extends Utils {

    WebDriver driver;

    public ItemPage(WebDriver driver) {
        this.driver = driver;
    }

    private By inventoryContainer = By.id("inventory_container");
    private String inventoryItemNameXpath = "//div[@class='inventory_item_label']//a/div";
    private String inventoryItemPriceXpath = "//div[@class='inventory_item_price']";
    private String addToCardButtonXpath = "//button[contains(text(),'Add to cart')]";
    private String removeToCardButtonXpath = "//button[contains(text(),'Remove')]";
    private By backToProductsButton = By.id("back-to-products");

    public void clickOnProduct(int randNumber) {
        driver.findElement(By.xpath("(" + inventoryItemNameXpath + ")[" + randNumber + "]")).click();
    }

    public Integer getRandomItem() {
        waitElementBePresent(inventoryContainer, 5);
        int randNumber = getRandomNumber(getListSize(By.xpath(inventoryItemNameXpath)));
        if(randNumber == 0){
            return 1;
        }
        return randNumber;
    }

    public String itemName(int randNumber) {
        String xpath = "(" + inventoryItemNameXpath + ")[" + randNumber + "]";
        return driver.findElement(By.xpath(xpath)).getText();
    }

    public Double itemPrice(int randNumber) {
        String xpath = "(" + inventoryItemPriceXpath + ")[" + randNumber + "]";
        String price = driver.findElement(By.xpath(xpath)).getText().replace("$", "");
        return Double.valueOf(price);
    }

    public void verifyItemInfoDisplayed() {
        Boolean actual = driver.findElement(By.className("inventory_details_name")).isDisplayed();
        Assert.assertEquals(true, actual);
    }

    public void verifyItemName(String expected) {
        String actual = driver.findElement(By.className("inventory_details_name")).getText();
        Assert.assertEquals(expected, actual);
    }

    public void verifyItemPrice(Double expected) {
        Double actual = Double.valueOf(driver.findElement(By.className("inventory_details_price")).getText().replace("$", ""));
        Assert.assertEquals(expected, actual);
    }

    public void clickOnAddToCart() {
        driver.findElement(By.xpath(addToCardButtonXpath)).click();
    }

    public void clickOnRemoveToCart() {
        driver.findElement(By.xpath(removeToCardButtonXpath)).click();
    }

    public void clickOnBackToProducts() {
        driver.findElement(backToProductsButton).click();
    }

}
