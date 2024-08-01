# Summer school 2024 - Cypress

This is a project made during the Module II of TDL Summer School 2024 #2 and it includes automated test scenarios using [**Cypress**](https://www.cypress.io/).

## Setting up project

### Installation

As a prerequisite, you need to have [**node.js**](https://nodejs.org/en) installed.
You must run the following command inside the repository for the necessary packages to be installed.

```bash
npm install
```

### Set Cypress credentials

To run the tests change the env `username` and `password` variable in the `./cypress.config.js` file to another account of your own choice for the [**website**](https://coe-webstore.tdlbox.com/) being tested.

### Settings

To change settings regarding how Cypress runs, edit the `cypress.config.js` file.
To change settings regarding packages, edit the `package.json` file.

## Run tests

### Run tests in headless mode

To run the tests in headless mode and have them save reports in `./mochawesome-report` and screenshots in `./cypress/screenshots` after running the command:

```bash
npm run cypress-open
```

### Run tests with GUI

To run the tests in browser run the following command:

```bash
npm run cypress-run
```

## other usefull npm scripts

### Clean up reports and screenshots

This rep uses [**mochawesome**](https://www.npmjs.com/package/mochawesome) package for generating test reports and screenshots. Run the the following command to clean up old reports:

```bash
npm run reports-cleanup
```

Run the following command to clean up old screenshots:

```bash
npm run screenshots-cleanup
```

### Format code

This rep uses [**Prettier**](https://www.npmjs.com/package/prettier) package for code formating. Run the following command to format all lines:

```bash
npm run format
```

## File structure

### Test location

All the tests are located in `./cypress/e2e/` folder. The full flow test is in `e2e.cy.js` file and the rest of the files in the same directory are single tests. These are the tests that can be ran using Cypress.

### Reports and screenshots location

If tests are ran with the command:

```bash
npm run cypress-run
```

then after tests finish running the reports can be found in `./mochawesome-report` folder and the screenshots in `./cypress/screenshots` folder.

### Javascript learning files

in the `./learning_js` directory there are javascript files that were created on the first module II day.

### Cypress config

`./cypress.config.js` file is the configuration file for Cypresss.

### Package files

Info regarding the packages can be found in the `./package.json` and `./package-lock.json` file.
