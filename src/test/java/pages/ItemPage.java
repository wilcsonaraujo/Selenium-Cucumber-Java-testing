package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import runner.RunCucumberTest;
import support.Utils;


public class ItemPage extends RunCucumberTest {

    private By inventoryContainer = By.id("inventory_container");
    private String inventoryItemNameXpath = "//div[@class='inventory_item_label']//a/div";
    private String inventoryItemPriceXpath = "//div[@class='inventory_item_price']";
    private String addToCardButtonXpath = "//button[contains(text(),'Add to cart')]";
    private String removeToCardButtonXpath = "//button[contains(text(),'Remove')]";
    private By backToProductsButton = By.id("back-to-products");

    public void clickOnProduct(int randNumber) {
        getDriver().findElement(By.xpath("(" + inventoryItemNameXpath + ")[" + randNumber + "]")).click();
    }

    public Integer getRandomItem() {
        Utils.waitElementBePresent(inventoryContainer, 5);
        int randNumber = Utils.getRandomNumber(Utils.getListSize(By.xpath(inventoryItemNameXpath)));
        if(randNumber == 0){
            return 1;
        }
        return randNumber;
    }

    public String itemName(int randNumber) {
        String xpath = "(" + inventoryItemNameXpath + ")[" + randNumber + "]";
        return getDriver().findElement(By.xpath(xpath)).getText();
    }

    public Double itemPrice(int randNumber) {
        String xpath = "(" + inventoryItemPriceXpath + ")[" + randNumber + "]";
        String price = getDriver().findElement(By.xpath(xpath)).getText().replace("$", "");
        return Double.valueOf(price);
    }

    public void verifyItemInfoDisplayed() {
        Boolean actual = getDriver().findElement(By.className("inventory_details_name")).isDisplayed();
        Assert.assertEquals(true, actual);
    }

    public void verifyItemName(String expected) {
        String actual = getDriver().findElement(By.className("inventory_details_name")).getText();
        Assert.assertEquals(expected, actual);
    }

    public void verifyItemPrice(Double expected) {
        Double actual = Double.valueOf(getDriver().findElement(By.className("inventory_details_price")).getText().replace("$", ""));
        Assert.assertEquals(expected, actual);
    }

    public void clickOnAddToCart() {
        getDriver().findElement(By.xpath(addToCardButtonXpath)).click();
    }

    public void clickOnRemoveToCart() {
        getDriver().findElement(By.xpath(removeToCardButtonXpath)).click();
    }

    public void clickOnBackToProducts() {
        getDriver().findElement(backToProductsButton).click();
    }

}
