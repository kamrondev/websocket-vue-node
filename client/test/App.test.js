import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import App from '../src/App.vue'

test('App', async (t) => {
  expect(App).toBeTruthy()
  const wrapper = mount(App)
  expect(wrapper.vm.sendMessage).toBeTruthy()
  expect(wrapper.vm.sendMessage).toBeInstanceOf(Function)
  wrapper.find('form').trigger('submit.prevent')
  expect(wrapper.emitted()).toHaveProperty('submit')
  wrapper.find('input[type=text]').setValue('test')
})
