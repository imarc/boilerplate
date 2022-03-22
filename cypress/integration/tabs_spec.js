// tabs_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Tabs Component (Default)', () => {
    beforeEach(() => cy.visit('/components/preview/tabs--default'))

    it('displays the first tab', () => {
        cy.get('.tabs__header + .tabs__panel p').should('be.visible')
        cy.contains('The New England Patriots')
    })

    it('opens the second tab', () => {
        cy.get('.tabs__tab:nth-child(2)').click()
        cy.get('.tabs__header + .tabs__panel p').should('not.be.visible')
        cy.contains('The Boston Celtics')
    })

    it('can use arrow keys', () => {
        cy.get('.tabs__tab:nth-child(1) button').type('{rightArrow}{rightArrow}')
        cy.get('.tabs__header + .tabs__panel p').should('not.be.visible')
        cy.get('.tabs__panel:last-child p').should('be.visible')
        cy.contains('The Boston Celtics')

        cy.get('.tabs__tab:nth-child(3) button').type('{leftArrow}')
        cy.get('.tabs__header + .tabs__panel p').should('not.be.visible')
        cy.get('.tabs__panel:last-child p').should('not.be.visible')
        cy.contains('The Boston Bruins')
    })

    it('can use home and end', () => {
        cy.get('.tabs__tab:nth-child(1) button').type('{end}')
        cy.get('.tabs__header + .tabs__panel p').should('not.be.visible')
        cy.get('.tabs__panel:last-child p').should('be.visible')
        cy.contains('The Boston Celtics')

        cy.get('.tabs__tab:nth-child(3) button').type('{home}')
        cy.get('.tabs__header + .tabs__panel p').should('be.visible')
        cy.get('.tabs__panel:last-child p').should('not.be.visible')
        cy.contains('The New England Patriots')
    })
})
