import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import TheMessageList from '../src/components/TheMessageList.vue'

test('TheMessageList', async (t) => {
  expect(TheMessageList).toBeTruthy()
  const wrapper = mount(TheMessageList, {
    props: {
      chat: ['test'],
    },
  })
  expect(wrapper.props().chat).toBeTruthy()
  expect(wrapper.props().chat).toEqual(['test'])
})
