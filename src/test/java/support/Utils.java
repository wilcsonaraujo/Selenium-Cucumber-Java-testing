package support;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import runner.RunCucumberTest;

import java.util.*;

public class Utils extends RunCucumberTest {

    public static void waitElementBePresent(By element, Integer tempo) {
        WebDriverWait wait = new WebDriverWait(getDriver(), tempo);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public static List<String> getList(By location) {
        List<String> elements = new ArrayList<>();
        List<WebElement> data = getDriver().findElements(location);
        for (WebElement e : data) {
            elements.add(e.getText());
        }
        return elements;
    }

    public static Integer getListSize(By location) {
        return getDriver().findElements(location).size();
    }

    public static Set<Integer> getRandomNumberList(int size) {
        Random random = new Random();
        int randomNum = random.nextInt(size);
        Set<Integer> randomNumbers = new HashSet<>();
        for (int i = 1; i <= randomNum; i++) {
            randomNumbers.add(random.nextInt(size) + 1);
        }
        return randomNumbers;
    }

    public static Integer getRandomNumber(int size) {
        Random random = new Random();
        int num = random.nextInt(size);
        if(num == 0){
            return 1;
        }else {
            return num;
        }
    }

}
