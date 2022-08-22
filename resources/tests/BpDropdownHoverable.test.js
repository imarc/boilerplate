import { expect, describe, it } from 'vitest'
import { render, fireEvent, getRoles } from '@testing-library/vue'
import matchers from '@testing-library/jest-dom/matchers'
import BpDropdownHoverable from '@resources/styles/atoms/dropdown/BpDropdownHoverable.vue'

expect.extend(matchers)

describe('BpDropdownHoverable Test', () => {
    const { getByText } = render(BpDropdownHoverable, {
        props: {
            id: 'dropdown-test',
            label: 'Dropdown Test',
        },
        slots: {
            default: '<p id="test-content">test</p>',
        },
    })

    it('Component Exists', () => {
        expect(BpDropdownHoverable).toBeTruthy()
    })

    it('Dropdown Initially Not Visible', () => {
        expect(getByText('test')).not.toBeVisible()
    })

    it('Dropdown Opens and Closes', async () => {
        const button = getByText('Dropdown Test')

        await fireEvent.mouseEnter(button)

        expect(getByText('test')).toBeVisible()

        await fireEvent.mouseLeave(button)

        setTimeout(() => { expect(getByText('test')).not.toBeVisible() }, 10)
    })

    it('Button Accessibility', () => {
        const button = getByText('Dropdown Test')
        expect('button' in getRoles(button)).toBe(true)
    })
})
