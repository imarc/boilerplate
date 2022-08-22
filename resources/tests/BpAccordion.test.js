import { expect, describe, it } from 'vitest'
import { render, screen, fireEvent, getRoles } from '@testing-library/vue'
import matchers from '@testing-library/jest-dom/matchers'
import BpAccordion from '@resources/styles/molecules/accordion/BpAccordion.vue'

expect.extend(matchers)

describe('BpAccordion Test', () => {
    const { getByText } = render(BpAccordion, {
        props: {
            id: 'accordion-test',
        },
        slots: {
            default: '<p id="test-content">test</p>',
            heading: 'Test Heading',
        },
    })

    it('Component Exists', () => {
        expect(BpAccordion).toBeTruthy()
    })

    it('Accordion initially closed', () => {
        const content = screen.queryByText('test')
        expect(content).toBeFalsy()
    })

    it('Accordion opens and closes', async () => {
        const button = getByText('Test Heading')
        expect(button).toBeTruthy()

        await fireEvent.click(button)

        expect(getByText('test')).toBeVisible()

        await fireEvent.click(button)

        const content = screen.queryByText('test')

        expect(content).toBeFalsy()
    })

    it('Button Accessibility', () => {
        const button = getByText('Test Heading')
        expect('button' in getRoles(button)).toBe(true)
    })
})
