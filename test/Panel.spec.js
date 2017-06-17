import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Panel from '../src/Panel'
import PanelBody from '../src/PanelBody'
import PanelHeader from '../src/PanelHeader'

const OPENNED_PANEL = <Panel isOpen panelTitle='wow'>Lorem Ipsum</Panel>
const CLOSED_PANEL = <Panel isOpen={false} panelTitle='wow'>Lorem Ipsum</Panel>
const MINIMIZED_CARD_CLASS = 'minimized-card'

test('Remove "minimized-card" class on panel openned', t => {
  const wrapper = shallow(OPENNED_PANEL)
  t.false(wrapper.hasClass(MINIMIZED_CARD_CLASS))
})

test('Contains "minimized-card" class on panel closed', t => {
  const wrapper = shallow(CLOSED_PANEL)
  t.true(wrapper.hasClass(MINIMIZED_CARD_CLASS))
})

test('Contains PanelBody component on panel openned', t => {
  const wrapper = shallow(OPENNED_PANEL)
  t.true(wrapper.find(PanelBody).exists())
})

test('Remove PanelBody component on panel closed', t => {
  const wrapper = shallow(CLOSED_PANEL)
  t.false(wrapper.find(PanelBody).exists())
})

test('Contains PanelHeader component on panel openned', t => {
  const wrapper = shallow(OPENNED_PANEL)
  t.true(wrapper.find(PanelHeader).exists())
})

test('Contains PanelHeader component on panel closed', t => {
  const wrapper = shallow(OPENNED_PANEL)
  t.true(wrapper.find(PanelHeader).exists())
})
