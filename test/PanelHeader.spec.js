import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import PanelHeader from '../src/PanelHeader'
import * as PanelTypes from '../src/PanelTypes'

const REACT_PANEL_HEADER_OPEN = 'panecard-header-open'

test('Class panecard-header-open on panel opened', t => {
  const wrapper = shallow(<PanelHeader isOpen panelTitle='The best panel' panelType={PanelTypes.INFO} togglePanel={() => {}} />)
  t.true(wrapper.hasClass(REACT_PANEL_HEADER_OPEN))
})

test('Remove class panecard-header-open on panel closed', t => {
  const wrapper = shallow(<PanelHeader isOpen={false} panelTitle='The best panel' panelType={PanelTypes.INFO} togglePanel={() => {}} />)
  t.false(wrapper.hasClass(REACT_PANEL_HEADER_OPEN))
})

test('Add panecard-success when pass the sucess type', t => {
  const wrapper = shallow(<PanelHeader isOpen={false} panelTitle='The best panel' panelType={PanelTypes.SUCCESS} togglePanel={() => {}} />)
  t.true(wrapper.hasClass('panecard-success'))
})

test('Add panecard-warning when pass the sucess type', t => {
  const wrapper = shallow(<PanelHeader isOpen={false} panelTitle='The best panel' panelType={PanelTypes.WARNING} togglePanel={() => {}} />)
  t.true(wrapper.hasClass('panecard-warning'))
})

test('Add panecard-danger when pass the sucess type', t => {
  const wrapper = shallow(<PanelHeader isOpen={false} panelTitle='The best panel' panelType={PanelTypes.DANGER} togglePanel={() => {}} />)
  t.true(wrapper.hasClass('panecard-danger'))
})

test('Add panecard-info when pass the sucess type', t => {
  const wrapper = shallow(<PanelHeader isOpen={false} panelTitle='The best panel' panelType={PanelTypes.INFO} togglePanel={() => {}} />)
  t.true(wrapper.hasClass('panecard-info'))
})

test('Add panecard-disabled when pass the sucess type', t => {
  const wrapper = shallow(<PanelHeader isOpen={false} panelTitle='The best panel' panelType={PanelTypes.DISABLED} togglePanel={() => {}} />)
  t.true(wrapper.hasClass('panecard-disabled'))
})

test('Call the callback when click on span (panel title)', t => {
  const mockOnClick = sinon.spy()
  const wrapper = shallow(<PanelHeader isOpen panelTitle='The best panel' panelType={PanelTypes.DISABLED} togglePanel={mockOnClick} />)
  wrapper.find('span').simulate('click')
  t.true(mockOnClick.calledOnce)
})

test('Call the callback when click on icon', t => {
  const mockOnClick = sinon.spy()
  const wrapper = shallow(<PanelHeader isOpen panelTitle='The best panel' panelType={PanelTypes.DISABLED} togglePanel={mockOnClick} />)
  wrapper.find('a').simulate('click')
  t.true(mockOnClick.calledOnce)
})
