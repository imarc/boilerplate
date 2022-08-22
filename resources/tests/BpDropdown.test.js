import { expect, describe, it } from 'vitest'
import { render, fireEvent, getRoles } from '@testing-library/vue'
import matchers from '@testing-library/jest-dom/matchers'
import BpDropdown from '@resources/styles/atoms/dropdown/BpDropdown.vue'

expect.extend(matchers)

describe('BpDropdown Test', () => {
    const { getByText } = render(BpDropdown, {
        props: {
            id: 'dropdown-test',
            label: 'Dropdown Test',
        },
        slots: {
            default: '<p id="test-content">test</p>',
        },
    })

    it('Component Exists', () => {
        expect(BpDropdown).toBeTruthy()
    })

    it('Dropdown Initially Not Visible', () => {
        expect(getByText('test')).not.toBeVisible()
    })

    it('Dropdown Opens and Closes', async () => {
        const button = getByText('Dropdown Test')

        await fireEvent.click(button)

        expect(getByText('test')).toBeVisible()

        await fireEvent.click(button)

        expect(getByText('test')).not.toBeVisible()
    })

    it('Button Accessibility', () => {
        const button = getByText('Dropdown Test')
        expect('button' in getRoles(button)).toBe(true)
    })
})
