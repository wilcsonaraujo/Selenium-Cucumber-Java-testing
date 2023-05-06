package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {}, //Coloca configurações de report de teste
        features="features",
        tags = {"~@ignore"}, //Roda tudo que é diferente de ignore
        glue= {"steps"}
        )

public class RunCucumberTest {

}
