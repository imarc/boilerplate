import { expect, describe, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import matchers from '@testing-library/jest-dom/matchers'
import BpCarousel from '@resources/styles/organisms/carousel/BpCarousel.vue'

expect.extend(matchers)

// STILL WORK IN PROGRESS
describe('BpCarousel Test', () => {
    const { getByText } = render(BpCarousel, {
        slots: {
            default: `
                <div>
                    <p>Test Slide One</p>
                </div>
                <div>
                    <p>Test Slide Two</p>
                </div>
                <div>
                    <p>Test Slide Three</p>
                </div>
            `,
        },
    })

    it('Component Exists', () => {
        expect(BpCarousel).toBeTruthy()
    })

    it('Slider Initializes', () => {
        const slideTwoContent = getByText('Test Slide One')
        expect(slideTwoContent).toBeTruthy()
        expect(slideTwoContent).not.toBeVisible()
    })
})
