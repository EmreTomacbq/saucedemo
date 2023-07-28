# User Dokumentation erstellen!

# saucedemo
# Install wdio steps
## npm init wdio .

# Run
## npm run wdio

# Installed Allrereports

# Install estlint (Beschreibung des Tools)
# ✔ How would you like to use ESLint? · problems
# ✔ What type of modules does your project use? · esm
# ✔ Which framework does your project use? · none
# ✔ Does your project use TypeScript? · No / Yes
# ✔ Where does your code run? · browser
# ✔ What format do you want your config file to be in? · JSON
# Local ESLint installation not found.
# The config that you've selected requires the following dependencies:
# @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest
# ✔ Would you like to install them now? · No / Yes
# ✔ Which package manager do you want to use? · npm
# Installing @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest, eslint@latest 

# Installed Husky + Husky Hooks


------
# WebdriverIO v8 with TypeScript v5
This project utilizes WebdriverIO Version 8.11 in conjunction with TypeScript Version 5.11 for automated web application testing. WebdriverIO is a powerful test framework based on the WebDriver protocol, allowing tests to be executed across various browsers and platforms. TypeScript is a type-safe extension of JavaScript that facilitates the development of robust and maintainable applications.

## Features of the Framework

### [WebdriverIO v8](https://webdriver.io/)

WebdriverIO is a test automation framework that allows you to run tests based on the Webdriver protocol technology. It provides support for your favorite BDD/TDD test framework and will run your tests locally or in the cloud using Sauce Labs or other services.

### [TypeScript v5](https://www.typescriptlang.org/)

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

### [Allure Reports](http://allure.qatools.ru/)

Allure Reports is an open-source reporting framework designed for test automation. It provides detailed and visually appealing reports to analyze the results of test runs. Allure Reports supports various testing frameworks and languages, making it a versatile choice for generating test reports.

### Generate Allurereport (Interface Report)

```
npm run report 

```

### [dotenv](https://www.npmjs.com/package/dotenv) 

Dotenv is a popular npm package that allows you to load environment variables from a .env file into your Node.js application. It simplifies the process of managing configuration variables, making it easier to work with sensitive data and application settings.

### Installation

```
npm install

```

### Usage of wdio.conf.js File

### Start tests

```
npm run wdio 

```


//"prepare": "husky install",
//"lint": "npx eslint . --ext .ts,.tsx --max-warnings=0;",