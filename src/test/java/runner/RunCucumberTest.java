package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {}, //Coloca configurações de report de teste
        features = "src/test/resources/features",
        tags = {"~@ignore"}, //Roda tudo que é diferente de ignore
        glue = {"steps"}
)

public class RunCucumberTest {
    public static WebDriver driver;

    @BeforeClass
    public static void start() {
        driver = new ChromeDriver();
    }

    @AfterClass
    public static void end() {
        driver.quit();
    }
}