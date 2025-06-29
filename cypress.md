# 🖥️ Software Testing

Software testing is an essential process that ensures the quality, functionality, and reliability of software applications. It involves a systematic evaluation of software components, aiming to identify defects, errors, or deviations from expected behavior to deliver a high-quality end product.

Website testing 🔍 specifically focuses on assessing web applications, ensuring they function accurately across different browsers, devices, and user scenarios. It encompasses various testing types, including functionality, usability, performance, security, and compatibility checks, to guarantee a seamless and satisfying user experience.

For the website, Cat-Lovers, we will be using Cypress for E2E Testing. A brief guide to cypress is mentioned in the following paragraphs.

## Cypress
### What is Cypress? 🤔

An open source, front-end testing tool which is useful for unit tests, integration tests, component tests and e2e tests. Since unit tests are the responsibility of the developer, and 
there are multiple unit testing tools available in each language such as Junit for Java, Pytest for Python, we use cypress mainly for E2E Tests.

### Why is Cypress used in the industry?

Cypress has everything a Software Tester wishes for: An impressive GUI, ease of use, high performance speed and a well known community, faster setup, faster to test, easier to debug and not language dependent. Cypress can be used for any web application which is built on javascript or any of the javascript frameworks or libraries. 

### Comparison with Selenium

#### Similarities
| **Similarities Between Cypress and Selenium**       | **Description**                                                                                      |
|-----------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Purpose**                                   | Both tools are used for automated testing of web applications.                                    |
| **Browser Support**                            | Support cross-browser testing across multiple browsers.                                             |
| **Language Support**                           | Provide flexibility by supporting multiple programming languages for test development.             |
| **Community and Resources**                    | Active communities and extensive documentation for user support and resources.                     |
| **Ecosystem**                                 | Rich ecosystems with plugins and integrations for extended functionalities.                       |
| **Testing Capabilities**                       | Support various testing types including functional, regression, and end-to-end testing.             |

#### Differences
**Feature** |**Selenium** | **Cypress**
--------|----------|--------
**Language** | Supports multiple languages (Java, Python, JavaScript) | Primarily uses JavaScript
**API** | Complex API, requires understanding of Selenium commands and waits | Simplified API with built-in commands, eliminates the need for explicit waits
**Execution Speed** | Relatively slower due to network communication between the test and browser | Faster execution as tests run directly in the browser
**Browser Support** | Supports multiple browsers | Primarily focused on Chromium-based browsers (Chrome, Electron, Edge, Firefox)
**Debugging** | Challenging debugging process, difficult to pinpoint failures | Easy debugging with time-traveling capabilities, provides detailed information on failures
**Parallel Execution** | Possible but requires external configurations for parallel testing | Built-in support for parallel execution
**Community Support** | Large community and extensive resources available | Growing community with active development and support
**Popularity** | Long-established tool, widely used in the industry | Increasing popularity due to modern architecture and ease of use

### Setup and important commands

Start by cloning a github repository with yourself on your Visual Studio Code. Visual Studio Code is faster and quick to use than other IDEs. It is better to stick with the GUI of the IDE to clone a repository. Go to your desired directory where you wish to keep your project.
```
git clone [URL of the Remote Git repository]
```

After you have successfully cloned a git repository with yourself run the following command.
```
npm install
```
This command is used for all the node related projects. Running this command successfully installs all the node modules and packages inside the project. After this command, run the following command to run your application on your localhost.

```
npm start
```
Open a separate terminal and run the following command:
```
npm install cypress --save-dev
```

This command will install all the cypress related modules and dependencies in the project. 

After this command, you need to start the cypress tool. The command to start cypress is:
```
npx cypress open
```

If you wish to run your cypress tests, then run the following command in the terminal. This will run the complete test file and will output the results of the tests.
```
npx cypress run
```

If you wish to use xpath in cypress, then you can follow these steps. First, you need to go to your project's directory and run the following command in the terminal.
```
npm install -D cypress-xpath
```

Then, you can add the following piece of code in your command.js file.
```
import 'cypress-xpath';
```

Now you can use xpath expression in your code.

### Great, now we are ready to begin with our E2E Testing. 

This will open the cypress GUI for you. Once the GUI is opened, you will follow the instrucions on your browser and choose the options which best suit you. Mostly, we tend to start with the E2E Testing with cypress, so we select the E2E Testing option and proceed further.

Navigate to your IDE and open the folder 'cypress' which has been freshly installed. In your folder, go to the subfolder e2e and inside this folder, create a new 'test1.speccy.js' file to start writing your E2E tests for your website.`

### Important keywords in Cypress

There are a variety of commands and keywords which are used in cypress. You can have a look at them here: [Cypress Commands](https://docs.cypress.io/api/table-of-contents)

However, these are a few basic and most commonly used commands and keywords in cypress for you all to get started.

#### Keywords

* describe(): define a test suite or a group of tests
* before(): runs once before all the tests in a test file
    1. beforeEach(): runs before each individual test case within a test file
    2. beforeAll(): runs once before all the tests in the entire test suite
* it(): defines an individual test case or a specification
* context(): group and organize test commands within a specific context or scope
* and(): asserts some assertion in this block which should be held true so as to give the desired correct output

#### Commands

* cy.visit(): Navigate to a specific URL.
* cy.get(): Retrieves DOM elements using selectors like IDs, classes, etc.
* cy.contains(): Looks for DOM elements with specific text content.
* cy.click(): Triggers a click event on a DOM element.
* cy.type(): Types into an input field or any focusable element.
* cy.should(): Adds assertions to ensure an element has specific properties.
* cy.wait(): Pauses the test to wait for a specific condition or duration.
* cy.each(): iterate over a set of elements returned by a command, allowing you to perform actions or assertions on each element individually
* cy.wrap(): wrap an element or value to perform further Cypress commands or assertions
* cy.type(): takes in a typed text in a text field
* cy.url(): checks for a url which has been passed in the parameter if its correct or not
* cy.first(): used to select the first element from a set of matched elements
* cy.last(): used to select the last element from a set of matched elememts
* cy.within(): sets the context of subsequent commands to operate within a specific DOM element or a collection of elements
* cy.eq(): used to select a specific element from a set of matched elements based on its index
* cy.invoke(): used to invoke a method on the selected DOM element
* cy.trigger(): used to trigger an event on the selected DOM element
* cy.xpath(): locates the element on the screen using the xpath function

#### Functions
* 'have.text' -> checks if the text is present
* 'not.have.text' -> checks if the text is not present
* 'have.css' -> checks if the applied css is present
* 'not.have.css' -> checks if the applied css is not present
* 'have.attr' -> checks if the attribute is present
* 'not.have.attr' -> checks if the attribute is not present
* 'have.length' -> checks if the length is present
* 'not.have.length' -> checks if the length is not present

### Tips and Tricks
Here are a few tricks and tips for you all if you wish to use cypress for E2E automated tetsing. Before learning this tips and tricks it might take you a few days to get used to the commands, to learn the basic keywords and commands. However, the key to  master anything is to be persistent and consistent. 

* **Start with the Basic Functionality**
  
  Always start writing with the basic functions of the applications. They can be viewing the screen, checking the background color, viewing the title text, buttons and other icons. Move to the more complex functions after you are donw ith the basic ones.
  
* **Perform a Manual QA**
  
  Before you begin with the automation scripts, you need to perform a rough manual QA for your website in order to grasp an idea of what will be the stuff you will be dealing with.

* **Break down Bigger Functionalities**
  
  At times, there are several features which have multiple sub features present in them. Break the larger components ino smaller, more vulnerable and easier to digest components which can be tested using simpler, easy and agile scripts. This will help you make your code more efficient and easy to understand.
  
* **Start Writing Scripts from the Top**
  
  When writing the test scripts, always start from the top of the page.
  
* **Keep your scripts aligned**
  
  Try using keywords like it and context to define multiple blocks and place your code in them in an orderly manner which not only makes it easy for you to understand but also helps you revise it at some point later too.

* **Apply the Code Resuability Formula**

  Just like in programming, if there are multiple tests which require a common code block, instead of replicating the code in every test individually, write that particular code in a function and reuse it wherever you want to.
