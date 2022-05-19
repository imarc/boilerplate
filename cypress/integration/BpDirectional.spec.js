describe('BpDirectional at 1000px wide', () => {
    beforeEach(() => cy.visit('/components/preview/directional'))
    it('can be focused', () => {
        cy.get('li a').first().focus()
        cy.get('li a').first().should('be.focused')
    })

    it('moves focus right', () => {
        cy.get('li a').first().focus()
        cy.get('li a').first().should('be.focused')
        cy.get('body').type('{rightArrow}')
        cy.get('li a').eq(1).should('be.focused')
        cy.get('body').type('{rightArrow}')
        cy.get('li a').eq(2).should('be.focused')
    })

    it('moves focus left', () => {
        cy.get('li a').eq(2).focus()
        cy.get('body').type('{leftArrow}')
        cy.get('li a').eq(1).should('be.focused')
        cy.get('body').type('{leftArrow}')
        cy.get('li a').eq(0).should('be.focused')
    })

    it('moves focus down', () => {
        cy.get('li a').first().focus()
        cy.get('body').type('{downArrow}')
        cy.get('li a').eq(3).should('be.focused')
        cy.get('body').type('{downArrow}')
        cy.get('li a').eq(6).should('be.focused')
    })

    it('moves focus up', () => {
        cy.get('li a').eq(7).focus()
        cy.get('body').type('{upArrow}')
        cy.get('li a').eq(4).should('be.focused')
        cy.get('body').type('{upArrow}')
        cy.get('li a').eq(1).should('be.focused')
    })

    it('moves focus via home', () => {
        cy.get('li a').eq(7).focus()
        cy.get('body').type('{home}')
        cy.get('li a').eq(0).should('be.focused')
    })

    it('moves focus via end', () => {
        cy.get('li a').eq(7).focus()
        cy.get('body').type('{end}')
        cy.get('li a').last().should('be.focused')
    })

    it('contrains bounds', () => {
        cy.get('li a').first().focus()
        cy.get('body').type('{upArrow}')
        cy.get('li a').first().should('be.focused')
        cy.get('body').type('{leftArrow}')
        cy.get('li a').first().should('be.focused')

        cy.get('li a').last().focus()
        cy.get('body').type('{downArrow}')
        cy.get('li a').last().should('be.focused')
        cy.get('body').type('{rightArrow}')
        cy.get('li a').last().should('be.focused')
    })
})

describe('BpDirectional at 700px wide', () => {
    beforeEach(() => {
        cy.viewport(700, 660)
        cy.visit('/components/preview/directional')
    })

    it('moves focus right', () => {
        cy.get('li a').first().focus()
        cy.get('li a').first().should('be.focused')
        cy.get('body').type('{rightArrow}')
        cy.get('li a').eq(1).should('be.focused')
    })

    it('moves focus left', () => {
        cy.get('li a').eq(1).focus()
        cy.get('body').type('{leftArrow}')
        cy.get('li a').eq(0).should('be.focused')
    })

    it('moves focus down', () => {
        cy.get('li a').first().focus()
        cy.get('body').type('{downArrow}')
        cy.get('li a').eq(2).should('be.focused')
        cy.get('body').type('{downArrow}')
        cy.get('li a').eq(4).should('be.focused')
    })

    it('moves focus up', () => {
        cy.get('li a').eq(5).focus()
        cy.get('body').type('{upArrow}')
        cy.get('li a').eq(3).should('be.focused')
        cy.get('body').type('{upArrow}')
        cy.get('li a').eq(1).should('be.focused')
    })
})
