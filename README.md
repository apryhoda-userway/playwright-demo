# Playwright Demo

It's a simple demo of test automation of [open source calculator](https://www.theonlinecalculator.com/) using [Playwright](https://playwright.dev/).

[![Playwright Tests](https://github.com/inf0lio/playwright-demo/actions/workflows/playwright.yml/badge.svg?branch=main)](https://github.com/inf0lio/playwright-demo/actions/workflows/playwright.yml)

## Setting up the environment

Create `.env` file and set up the environment variables (see `.env.example`).

Then install all the dependencies:

```
npm install
```

## Running the tests

Execute all tests:

```
npm run test
```

Only `sanity` tests:

```
npm run test:sanity
```

Or only `smoke` tests:

```
npm run test:smoke
```

### Running the tests in the specific browsers

We have an opportunity to run tests against 5 different browsers(by default all of them are used).

To run the tests on `desktop chrome` only:

```
npm run test:chrome
```

To run the tests on `desktop firefox` only:

```
npm run test:firefox
```

To run the tests on `desktop safari` only:

```
npm run test:safari
```

To run the tests on `mobile chrome` only:

```
npm run test:mobile-chrome
```

To run the tests on `mobile safari` only:

```
npm run test:mobile-safari
```

### Running the tests in the specific modes

We can run the tests in `debug` or `ui` mode:

```
npm run test:debug
```

```
npm run test:ui
```

## The HTML test report

To open the report:

```
npm run test:show-report
```
