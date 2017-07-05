import React from 'react'
import PropTypes from 'prop-types'

const PanelBody = ({ content }) => (
  <div className='panecard-body'>
    {content}
  </div>
)

PanelBody.propTypes = {
  content: PropTypes.node
}

export default PanelBody
