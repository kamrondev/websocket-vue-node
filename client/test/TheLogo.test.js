import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import TheLogo from '../src/components/TheLogo.vue'

test('TheLogo', async (t) => {
  expect(TheLogo).toBeTruthy()
  const wrapper = mount(TheLogo)
  expect(wrapper.find('img').attributes('src')).toBeTruthy()
})
