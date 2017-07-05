import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import PanelBody from '../src/PanelBody'

const PANEL_BODY = <PanelBody content='Lorem ipsum' />
const PANEL_BODY_CLASS = 'panecard-body'

test('Render PanelBody component', t => {
  const expected = (
    <div className='panecard-body'>Lorem ipsum</div>
  )
  const wrapper = shallow(PANEL_BODY)
  t.true(wrapper.contains(expected))
})

test('Has panecard-body class', t => {
  const wrapper = shallow(PANEL_BODY)
  t.true(wrapper.hasClass(PANEL_BODY_CLASS))
})
