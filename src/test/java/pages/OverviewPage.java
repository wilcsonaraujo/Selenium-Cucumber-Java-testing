package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import support.Utils;

import java.util.ArrayList;
import java.util.List;

public class OverviewPage extends Utils {
    WebDriver driver;

    public OverviewPage(WebDriver driver) {
        this.driver = driver;
    }

    private By finishButton = By.id("finish");
    private String cartListItemPriceXpath = "//div[@class='inventory_item_price']";
    private By itemTotal_Label = By.className("summary_subtotal_label");
    private By tax_Label = By.className("summary_tax_label");
    private By totalPrice_Label = By.xpath("//div[contains(text(),'Total: $')]");
    private String overviewTitleXpath = "//span[contains(text(),'Checkout: Overview')]";
    private By successMessage_Label = By.className("complete-header");


    public void overviewDisplayed() {
        driver.findElement(By.xpath(overviewTitleXpath)).isDisplayed();
    }

    public void checkItemTotal() {
        Double sumItemPriceList = 0.0;
        List<Double> itemPriceList = getPriceItemList(cartListItemPriceXpath);
        for (Double e : itemPriceList) {
            sumItemPriceList += e.doubleValue();
        }
        Double expected = Double.valueOf(driver.findElement(itemTotal_Label).getText().replace("Item total: $", ""));

        Assert.assertEquals(expected, sumItemPriceList);
    }

    public void checkTotalPrice() {
        Double sumItemPriceList = 0.0;
        List<Double> itemPriceList = getPriceItemList(cartListItemPriceXpath);
        for (Double e : itemPriceList) {
            sumItemPriceList += e.doubleValue();
        }
        Double expected = Double.valueOf(driver.findElement(totalPrice_Label).getText().replace("Total: $", ""));
        Double tax = Double.valueOf(driver.findElement(tax_Label).getText().replace("Tax: $", ""));
        Double actual = sumItemPriceList + tax;
        Assert.assertEquals(expected, actual);
    }

    public void finishOrder() {
        driver.findElement(finishButton).click();
    }

    public void verifySuccessMessage(String message) {
        String successMessage = driver.findElement(successMessage_Label).getText();
        Assert.assertEquals(successMessage, message);
    }

    public List<Double> getPriceItemList(String location) {
        List<String> e = getList(By.xpath(location));
        List<Double> data = new ArrayList<>();
        for (String a : e) {
            data.add(Double.valueOf(a.toString().replace("$", "")));
        }
        return data;
    }

}
