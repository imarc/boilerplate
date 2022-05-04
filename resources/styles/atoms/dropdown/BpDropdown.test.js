import { mount } from '@vue/test-utils'
import BpDropdown from './BpDropdown.vue'

let wrapper

beforeEach(async () => {
    wrapper = mount(BpDropdown, {
        props: {
            label: 'Our Company',
            id: 'js-about'
        },
        slots: {
            default: '<nav class="dropdown__menu menu"></nav>',
        },
    })
})

test('mount dropdown', async () => {
    expect(BpDropdown).toBeTruthy()
    expect(wrapper.isVisible()).toBe(true)
})

test('opens on click', async () => {
    wrapper.find('button[aria-controls="js-about"]').trigger('click')
    expect(wrapper.find('#js-about').isVisible())
})

test('closes on escape', async () => {
    wrapper.find('button[aria-controls="js-about"]').trigger('click')
    wrapper.trigger('keydown', { key: 'Escape' })
    expect(wrapper.find('#js-about').isVisible()).toBe(false)
})

test('closes on click', async () => {
    expect(BpDropdown).toBeTruthy()

    wrapper.find('button[aria-controls="js-about"]').trigger('click')
    wrapper.find('button[aria-controls="js-about"]').trigger('click')
    expect(wrapper.find('#js-about').isVisible()).toBe(false)
})
