import { mount } from '@cypress/vue'
import BpDropdown from './BpDropdown.vue'

it('BpDropdown', () => {
    mount(BpDropdown, {
        propsData: {
            label: 'Test Label',
            id: 'test',
        },
        slots: {
            default: `
                <ul>
                    <li>
                        <a href=""><span>Ipsum.</span></a>
                    </li>
                    <li>
                        <a href=""><span>Lorem.</span></a>
                    </li>
                    <li>
                        <a href=""><span>Elit.</span></a>
                    </li>
                </ul>
            `,
        },
    })

    cy.get('button').contains('Test').click()
})
