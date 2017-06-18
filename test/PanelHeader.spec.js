import test from 'ava'
import React from 'react'
import { shallow, render } from 'enzyme'
import PanelHeader from '../src/PanelHeader'
import * as PanelTypes from '../src/PanelTypes'

const REACT_PANEL_HEADER_OPEN = 'react-panel-header-open'

test('Class react-panel-header-open on panel opened', t => {
  const wrapper = shallow(<PanelHeader isOpen panelTitle='The best panel' panelType={PanelTypes.INFO} togglePanel={() => {}} />)
  t.true(wrapper.hasClass(REACT_PANEL_HEADER_OPEN))
})

test('Remove class react-panel-header-open on panel closed', t => {
  const wrapper = shallow(<PanelHeader isOpen={false} panelTitle='The best panel' panelType={PanelTypes.INFO} togglePanel={() => {}} />)
  t.false(wrapper.hasClass(REACT_PANEL_HEADER_OPEN))
})

test('Add react-panel-success when pass the sucess type', t => {
  const wrapper = shallow(<PanelHeader isOpen={false} panelTitle='The best panel' panelType={PanelTypes.SUCCESS} togglePanel={() => {}} />)
  t.true(wrapper.hasClass('react-panel-success'))
})

test('Add react-panel-warning when pass the sucess type', t => {
  const wrapper = shallow(<PanelHeader isOpen={false} panelTitle='The best panel' panelType={PanelTypes.WARNING} togglePanel={() => {}} />)
  t.true(wrapper.hasClass('react-panel-warning'))
})

test('Add react-panel-danger when pass the sucess type', t => {
  const wrapper = shallow(<PanelHeader isOpen={false} panelTitle='The best panel' panelType={PanelTypes.DANGER} togglePanel={() => {}} />)
  t.true(wrapper.hasClass('react-panel-danger'))
})

test('Add react-panel-info when pass the sucess type', t => {
  const wrapper = shallow(<PanelHeader isOpen={false} panelTitle='The best panel' panelType={PanelTypes.INFO} togglePanel={() => {}} />)
  t.true(wrapper.hasClass('react-panel-info'))
})

test('Add react-panel-disabled when pass the sucess type', t => {
  const wrapper = shallow(<PanelHeader isOpen={false} panelTitle='The best panel' panelType={PanelTypes.DISABLED} togglePanel={() => {}} />)
  t.true(wrapper.hasClass('react-panel-disabled'))
})

// test('Return close title in options when the panel is open', t => {
//   const wrapper = render(<PanelHeader isOpen panelTitle='The best panel' panelType={PanelTypes.DISABLED} togglePanel={() => {}} />)
//   t.is('close', wrapper.find('span'))
// })
