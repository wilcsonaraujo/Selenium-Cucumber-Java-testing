package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;
import runner.RunCucumberTest;
import support.Utils;

import java.util.*;

public class ProductsPage extends RunCucumberTest {

    Set<Integer> random;
    private By inventoryItemNameList = By.className("inventory_item_name");
    private By inventoryItemPriceList = By.className("inventory_item_price");
    private By inventoryItemButtonList = By.xpath("//div[2]/button[1]");
    private String inventoryAddRemoveButtonXpath = "//div[@class='inventory_list']//button";
    private By cartIcon = By.id("shopping_cart_container");
    private By sortedByOptions = By.className("product_sort_container");
    private By inventoryItems = By.xpath("(//span[@class='title'])[1]");


    public void verifyInventory() {
        getDriver().findElement(inventoryItems).isDisplayed();
    }

    public void selectOrderBy(String order) {
        Select select_order = new Select(getDriver().findElement(sortedByOptions));
        select_order.selectByVisibleText(order);
    }

    public List<String> getNameProductsList() {
        return Utils.getList(inventoryItemNameList);
    }

    public List<Double> getPriceProductsList() {
        List<String> e = Utils.getList(inventoryItemPriceList);
        List<Double> data = new ArrayList<>();
        for (String a : e) {
            data.add(Double.valueOf(a.toString().replace("$", "")));
        }
        return data;
    }

    public void verifyNameAscendingOrder(List<String> expected) {
        Collections.sort(expected);
        List<String> actual = getNameProductsList();
        Assert.assertEquals(expected, actual);
    }

    public void verifyNameDescendingOrder(List<String> expected) {
        Collections.sort(expected, Collections.reverseOrder());
        List<String> actual = getNameProductsList();
        Assert.assertEquals(expected, actual);
    }

    public void verifyPriceAscendingOrder(List<Double> expected) {
        Collections.sort(expected);
        List<Double> actual = getPriceProductsList();
        Assert.assertEquals(expected, actual);
    }

    public void verifyPriceDescendingOrder(List<Double> expected) {
        Collections.sort(expected, Collections.reverseOrder());
        List<Double> actual = getPriceProductsList();
        Assert.assertEquals(expected, actual);
    }

    public void clickOnAddSomeProductToCart() {
        int sum = Utils.getListSize(By.xpath(inventoryAddRemoveButtonXpath));
        random = Utils.getRandomNumberList(sum);
        for (Integer e : random) {
            getDriver().findElement(By.xpath("(" + inventoryAddRemoveButtonXpath + ")[" + e + "]")).click();
        }
    }

    public void clickOnAddAllProductToCart() {
        int sum = Utils.getListSize(By.xpath(inventoryAddRemoveButtonXpath));
        for (int i = 1; i <= sum; i++) {
            getDriver().findElement(By.xpath("(" + inventoryAddRemoveButtonXpath + ")[" + i + "]")).click();
        }
    }

    public void verifyAmongProductsCart(int actual) {
        List<String> btn = getAddRemoveList();
        int expected = Collections.frequency(btn, "Remove");
        Assert.assertEquals(expected, actual);
    }

    public void removeButtonIsVisible() {
        List<String> AddRemoveStatus = Utils.getList(inventoryItemButtonList);
        for (String e : AddRemoveStatus) {
            if (e == "Remove") {
                getDriver().findElement(By.xpath("(" + inventoryAddRemoveButtonXpath + ")[" + e + "]")).isDisplayed();
            }
        }
    }

    public void clickOnRemoveAllProductsToCart() {
        List<String> addRemoveStatus = getAddRemoveList();
        int num = 1;
        for (String e : addRemoveStatus) {
            if (e.replace("\"", "").equals("Remove")) {
                getDriver().findElement(By.xpath("(" + inventoryAddRemoveButtonXpath + ")[" + num + "]")).click();
            }
            num++;
        }
    }

    public void clickOnRemoveSomeProductToCart() {
        List<String> btn = getAddRemoveList();
        int sumAddProd = Collections.frequency(btn, "Remove");
        random = Utils.getRandomNumberList(sumAddProd);

        for (Integer e : random) {
            getDriver().findElement(By.xpath("(" + inventoryAddRemoveButtonXpath + ")[" + e + "]")).click();
        }
    }

    public void clickOnAddToCart(int item) {
        getDriver().findElement(By.xpath("(" + inventoryAddRemoveButtonXpath + ")[" + item + "]")).click();
    }

    public Integer getAmountCartNumber() {
        String a = getDriver().findElement(cartIcon).getText();
        int cartNum;
        if (a.isEmpty()) {
            cartNum = 0;
        } else {
            cartNum = Integer.parseInt(a);
        }
        return cartNum;
    }

    public List<String> getAddRemoveList() {
        List<String> AddRemoveStatus = Utils.getList(inventoryItemButtonList);
        return AddRemoveStatus;
    }
}
