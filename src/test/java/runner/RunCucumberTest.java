package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty:target/cucumber-htmlreport.text", "json:target/cucumber-reports/cucumber-reports.json"},
        features = "src/test/resources/features",
        tags = {"~@ignore"},
        glue = {"steps"}
)

public class RunCucumberTest extends RunBase {

    @AfterClass
    public static void end() {
        driver.quit();
    }
}
