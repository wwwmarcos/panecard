import React from 'react'
import PropTypes from 'prop-types'

const PanelHeader = ({ isOpen, panelTitle, options, togglePanel, panelType }) => {
  const getTitle = () => (
    isOpen ? 'Minimizar' : 'Expandir'
  )

  return (
    <div className={'react-panel-header react-panel-header-open react-panel-' + panelType + (isOpen ? ' react-panel-header-open' : '')}>
      <span onClick={togglePanel} title={getTitle()}>
        { panelTitle }
      </span>

      <a className='react-panel-options' onClick={togglePanel} title={getTitle()}>
        {isOpen ? 'X' : '-' }
      </a>

      <div className='react-panel-options'>
        { options }
      </div>
    </div>
  )
}

PanelHeader.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  panelTitle: PropTypes.string.isRequired,
  options: PropTypes.any,
  panelType: PropTypes.string.isRequired,
  togglePanel: PropTypes.func.isRequired
}

export default PanelHeader
