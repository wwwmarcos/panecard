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
    <div className={'panecard-header panecard-' + panelType + (isOpen ? ' panecard-header-open' : '')}>
      <span onClick={togglePanel} title={getTitle()}>
        { panelTitle }
      </span>

      <a className='panecard-options' onClick={togglePanel} title={getTitle()}>
        {isOpen ? closeIcon : expandIcon}
      </a>

      <div className='panecard-options'>
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
