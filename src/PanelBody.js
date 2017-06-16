import React from 'react'
import PropTypes from 'prop-types'

const PanelBody = ({ content }) => (
  <div className='react-panel-body'>
    { content }
  </div>
)

PanelBody.propTypes = {
  content: PropTypes.node.isRequired
}

export default PanelBody
