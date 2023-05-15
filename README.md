# Selenium-Cucumber-Java testing

![Selenium](https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Apache Maven](https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white)

The "Selenium-Cucumber-Java" project is a repository on GitHub that contains an example of test automation using the Selenium and Cucumber technologies implemented in the Java language. The purpose of this project is to demonstrate how to perform automated tests efficiently and in a structured manner, using a combination of popular tools in software development.

## Technologies Used
The project utilizes the following technologies:

**Selenium:** A widely used test automation tool for testing web applications. It allows interaction with page elements, simulates user actions, and verifies application behavior.

**Cucumber:** A behavior-driven development (BDD) testing framework that enables writing tests in natural language. It helps maintain collaboration between developers, testers, and project stakeholders.

**Java:** A popular and widely used programming language for application development. Java is a common choice for test automation due to its robustness and the vast amount of available libraries.

## Features
The project showcases examples of test automation for a fictional web application. The implemented features include:

**Login:** Tests to verify the login functionality of the application, including both successful and failed scenarios.

**Products:** Tests to validate the functionalities related to products, ensuring that the results are displayed correctly.

**Shopping Cart:** Tests to verify the addition and removal of items from the shopping cart, ensuring that the total is calculated accurately.

**Checkout:** Tests to simulate the completion of a purchase, including filling out the payment form and verifying the order summary.

![Functions](/target/functions.jpeg)

## Project Structure
The project is organized as follows:

**src/test/java:** Contains the classes and packages related to the implementation of test automation.

**src/test/resources:** Cucumber resources required for test execution, such as features and test scenarios.

## How to Use
To use the project, follow the instructions below:

Clone the GitHub repository to your local machine.
Import the project into your preferred Java IDE.
Make sure you have the correct dependencies set up, such as Selenium WebDriver and Cucumber.
Run the automated tests from the execution class "RunCucumberTest" in the runner package.

### Reporting
To generate reports, follow the instructions below:
Execute the command line in the terminal ```mvn test -Dtest=RunCucumberTest cluecumber-report:reporting```
The results will be in **target/trivago-reports**

### Test Results
![Test Results](/target/testResults.png)

## Conclusion
The "Selenium-Cucumber-Java" project provides a basic structure for test automation using Selenium and Cucumber in the Java language.
