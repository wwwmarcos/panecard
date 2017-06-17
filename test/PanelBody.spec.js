import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import PanelBody from '../src/PanelBody'

test('Render PanelBody component', t => {
  const expected = (
    <div className='react-panel-body'>Lorem ipsum</div>
  )
  const wrapper = shallow(<PanelBody content='Lorem ipsum' />)
  t.true(wrapper.contains(expected))
})
