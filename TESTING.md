Testing
=======

Tests are run via [Cypress](https://www.cypress.io/). To run the tests:

1. To run Vite and Cypress interactively: `npm run ci`
2. To run the test suite without a GUI and exit: `npm test`


Adding Tests
------------

Create additional files within `cypress/integration/` that end with `_spec.js` and they should show immediately within the GUI. Cypress also provides a button for quickly creating new tests from within the GUI. Also [see the official docs for creating your first test.](https://docs.cypress.io/guides/getting-started/writing-your-first-test)

When creating a test, point cypress against the fractal preview for a test:

```
cy.visit('/components/preview/tabs--default')
```

A minimal test for a new component might like look this:

```
describe('Your new component', () => {
    beforeEach(() => cy.visit('/components/preview/your-component'))

    it('works!', () => {
        cy.contains('Hello World')
    })

    // More tests here
})
```
