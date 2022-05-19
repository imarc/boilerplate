describe('BpDismissable', () => {
    it('visible on load', () => {
        cy.visit('/components/preview/dismissable')
        cy.get('.banner').should('be.visible')
    })

    it('can be dismissed', () => {
        cy.visit('/components/preview/dismissable')
        cy.get('button.banner__dismiss').first().click()
        cy.get('.banner').should('not.exist')
    })
    it('stays dismissed', () => {
        cy.visit('/components/preview/dismissable')
        cy.get('button.banner__dismiss').first().click()
        cy.get('.banner').should('not.exist')
        cy.reload()
        cy.get('.banner').should('not.exist')
    })
})
