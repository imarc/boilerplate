describe('BpClickable', () => {
    beforeEach(() => cy.visit('/components/preview/clickable'))

    it('is clickable', () => {
        cy.get('.card').first().click()
        cy.location('hash').should('eq', '#example')
    })

    it('works with multiple instances', () => {
        cy.get('.card').eq(1).click()
        cy.location('hash').should('eq', '#example2')
    })

    it('allows nested links to work', () => {
        cy.get('.card .card__content a').first().click()
        cy.location('hash').should('eq', '#nope')
    })

    it('clicking the CTA still works', () => {
        cy.get('.card .card__action').first().click()
        cy.location('hash').should('eq', '#example')
    })
})
