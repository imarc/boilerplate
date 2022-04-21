describe('BpDropdown', () => {
    it('opens on click', () => {
        cy.visit('/components/preview/dropdown')

        cy.get('button[aria-controls="js-about"]').first().click()
        cy.get('#js-about').should('be.visible')
    })

    it('closes on escape', () => {
        cy.visit('/components/preview/dropdown')

        cy.get('button[aria-controls="js-about"]').first().click()

        cy.get('body').type('{esc}')
        cy.get('#js-about').should('be.hidden')
    })

    it('closes on click', () => {
        cy.visit('/components/preview/dropdown')

        cy.get('button[aria-controls="js-about"]').first().click()

        cy.get('button[aria-controls="js-about"]').first().click()
        cy.get('#js-about').should('be.hidden')
    })
})
