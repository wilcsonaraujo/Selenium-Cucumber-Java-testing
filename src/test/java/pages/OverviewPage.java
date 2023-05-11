package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import runner.RunCucumberTest;
import support.Utils;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

public class OverviewPage extends RunCucumberTest {

    private By finishButton = By.id("finish");
    private String cartListItemPriceXpath = "//div[@class='inventory_item_price']";
    private By itemTotal_Label = By.className("summary_subtotal_label");
    private By tax_Label = By.className("summary_tax_label");
    private By totalPrice_Label = By.xpath("//div[contains(text(),'Total: $')]");
    private String overviewTitleXpath = "//span[contains(text(),'Checkout: Overview')]";
    private By successMessage_Label = By.className("complete-header");

    BigDecimal bigDecimal;


    public void overviewDisplayed() {
        getDriver().findElement(By.xpath(overviewTitleXpath)).isDisplayed();
    }

    public void checkItemTotal() {
        Double sumItemPriceList = 0.0;
        List<Double> itemPriceList = getPriceItemList(cartListItemPriceXpath);
        for (Double e : itemPriceList) {
            sumItemPriceList += e.doubleValue();
        }
        Double expected = Double.valueOf(getDriver().findElement(itemTotal_Label).getText().replace("Item total: $", ""));

        Assert.assertEquals(expected, sumItemPriceList);
    }

    public void checkTotalPrice() {
        Double sumItemPriceList = 0.0;
        List<Double> itemPriceList = getPriceItemList(cartListItemPriceXpath);
        for (Double e : itemPriceList) {
            sumItemPriceList += e.doubleValue();
        }
        Double expected = Double.valueOf(getDriver().findElement(totalPrice_Label).getText().replace("Total: $", ""));
        Double tax = Double.valueOf(getDriver().findElement(tax_Label).getText().replace("Tax: $", ""));
        String actual = new DecimalFormat("##.##").format(sumItemPriceList + tax).replace(",", ".");
        Assert.assertEquals(expected, Double.valueOf(actual));
    }

    public void finishOrder() {
        getDriver().findElement(finishButton).click();
    }

    public void verifySuccessMessage(String message) {
        String successMessage = getDriver().findElement(successMessage_Label).getText();
        Assert.assertEquals(successMessage, message);
    }

    public List<Double> getPriceItemList(String location) {
        List<String> e = Utils.getList(By.xpath(location));
        List<Double> data = new ArrayList<>();
        for (String a : e) {
            data.add(Double.valueOf(a.toString().replace("$", "")));
        }
        return data;
    }

}
