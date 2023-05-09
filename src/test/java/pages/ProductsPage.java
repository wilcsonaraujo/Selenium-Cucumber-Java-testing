package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;
import support.Utils;

import java.util.*;

public class ProductsPage extends Utils {
    WebDriver driver;

    Set<Integer> random;
    Random rand = new Random();
    private By inventoryItemNameList = By.className("inventory_item_name");
    private By inventoryItemPriceList = By.className("inventory_item_price");
    private By inventoryItemButtonList = By.xpath("//div[2]/button[1]");
    private String inventoryAddRemoveButtonXpath = "//div[@class='inventory_list']//button";
    private By cartIcon = By.id("shopping_cart_container");
    private By sortedByOptions = By.className("product_sort_container");
    private By inventoryContainer = By.id("inventory_container");


    public ProductsPage(WebDriver driver) {
        this.driver = driver;
    }

    public void verifyInventory() {
        driver.findElement(inventoryContainer).isDisplayed();
    }

    public void selectOrderBy(String order) {
        Select select_order = new Select(driver.findElement(sortedByOptions));
        select_order.selectByVisibleText(order);
    }

    public List<String> getNameProductsList() {
        return getList(inventoryItemNameList);
    }

    public List<Double> getPriceProductsList() {
        List<String> e = getList(inventoryItemPriceList);
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
        int sum = getListSize(By.xpath(inventoryAddRemoveButtonXpath));
        random = getRandomNumberList(sum);
        for (Integer e : random) {
            driver.findElement(By.xpath("(" + inventoryAddRemoveButtonXpath + ")[" + e + "]")).click();
        }
    }
    public void clickOnAddAllProductToCart() {
        int sum = getListSize(By.xpath(inventoryAddRemoveButtonXpath));
        for (int i=1; i<=sum;i++) {
            driver.findElement(By.xpath("(" + inventoryAddRemoveButtonXpath + ")[" + i + "]")).click();
        }
    }

    public void verifyAmongProductsCart(int actual) {
        List<String> btn = getAddRemoveList();
        int expected = Collections.frequency(btn, "Remove");
        Assert.assertEquals(expected, actual);
    }

    public void removeButtonIsVisible (){
        List<String> AddRemoveStatus = getList(inventoryItemButtonList);
        for(String e: AddRemoveStatus){
            if(e == "Remove"){
                driver.findElement(By.xpath("(" + inventoryAddRemoveButtonXpath + ")[" + e + "]")).isDisplayed();
            }
        }
    }

    public void clickOnRemoveToCart(){
        List<String> addRemoveStatus = getAddRemoveList();
        int num=1;
        for(String e: addRemoveStatus){
            if(e.replace("\"", "").equals("Remove")){
                driver.findElement(By.xpath("(" + inventoryAddRemoveButtonXpath + ")[" + num + "]")).click();
            }
            num++;
        }
    }

    public Integer getAmountCartNumber(){
        String cartNum = driver.findElement(By.className("shopping_cart_badge")).getText();
        if(cartNum == ""){
            cartNum = "0";
        }
//        int cartNum = Integer.parseInt(driver.findElement(cartIcon).getText());
        return Integer.valueOf(cartNum);
    }

    public List<String> getAddRemoveList(){
        List<String> AddRemoveStatus = getList(inventoryItemButtonList);
        return AddRemoveStatus;
    }
}
