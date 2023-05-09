package support;

import net.bytebuddy.utility.RandomString;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import runner.RunCucumberTest;

import java.util.*;

public class Utils extends RunCucumberTest {

    public void waitElementBePresent(By element, Integer tempo) {
        WebDriverWait wait = new WebDriverWait(driver, tempo);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public List<String> getList(By location) {
        List<String> elements = new ArrayList<>();
        List<WebElement> data = driver.findElements(location);
        for (WebElement e : data) {
            elements.add(e.getText());
        }
        return elements;
    }

    public Integer getListSize(By location) {
        return driver.findElements(location).size();
    }

    public Set<Integer> getRandomNumberList(int size) {
        Random random = new Random();
        int randomNum = random.nextInt(size);
        Set<Integer> randomNumbers = new HashSet<>();
        for (int i = 1; i <= randomNum; i++) {
            randomNumbers.add(random.nextInt(size) + 1);
        }
        return randomNumbers;
    }

}
