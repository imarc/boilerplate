import { expect, describe, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import matchers from '@testing-library/jest-dom/matchers'
import BpTabs from '@resources/styles/molecules/tabs/BpTabs.vue'

expect.extend(matchers)

describe('BpTabs Test', () => {
    const { getByText } = render(BpTabs, {
        props: {
            tabs: {
                one: 'One',
                two: 'Two',
                three: 'Three',
            },
        },
        slots: {
            'tab-panel-one': '<p>Test One</p>',
            'tab-panel-two': '<p>Test Two</p>',
            'tab-panel-three': '<p>Test Three</p>',
        },
    })

    it('Component Exists', () => {
        expect(BpTabs).toBeTruthy()
    })

    it('Default Open Tab', () => {
        const tabOneContent = screen.queryByText('Test One')
        const tabTwoContent = screen.queryByText('Test Two')
        const tabThreeContent = screen.queryByText('Test Three')

        expect(tabOneContent).toBeTruthy()
        expect(tabTwoContent).toBeFalsy()
        expect(tabThreeContent).toBeFalsy()
    })

    it('Change Tab', async () => {
        const tabTwoButton = getByText('One')
        expect(tabTwoButton).toBeTruthy()

        await fireEvent.click(tabTwoButton)

        setTimeout(() => {
            const tabOneContent = screen.queryByText('Test One')
            const tabTwoContent = screen.queryByText('Test Two')
            expect(tabTwoContent).toBeTruthy()
            expect(tabOneContent).toBeFalsy()
        }, 10)
    })
})
