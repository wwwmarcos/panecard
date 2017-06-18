import React from 'react'
import PropTypes from 'prop-types'
import Ionicon from 'react-ionicons'

const PanelHeader = ({ isOpen, panelTitle, options, togglePanel, panelType }) => {
  const getTitle = () => (
    isOpen ? 'Open' : 'Close'
  )

  const closeIcon = <Ionicon icon='ion-close-round' fontSize='20px' />
  const expandIcon = <Ionicon icon='ion-arrow-expand' fontSize='25px' />

  return (
    <div className={'react-panel-header react-panel-' + panelType + (isOpen ? ' react-panel-header-open' : '')}>
      <span onClick={togglePanel} title={getTitle()}>
        { panelTitle }
      </span>

      <a className='react-panel-options' onClick={togglePanel} title={getTitle()}>
        {isOpen ? closeIcon : expandIcon}
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
