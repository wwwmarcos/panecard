import React, { PureComponent } from 'react'
import { INFO } from './PanelTypes'
import PanelHeader from './PanelHeader'
import PanelBody from './PanelBody'
import PropTypes from 'prop-types'

class Panel extends PureComponent {
  static defaultProps = {
    isOpen: false,
    panelType: INFO
  }

  static propTypes = {
    isOpen: PropTypes.bool,
    panelTitle: PropTypes.string.isRequired,
    options: PropTypes.any,
    panelType: PropTypes.string,
    children: PropTypes.node
  }

  constructor (props) {
    super(props)
    this.state = {
      isOpen: props.isOpen
    }
  }

  togglePanel = (event) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  componentWillReceiveProps = ({ isOpen }) => {
    this.setState({
      isOpen
    })
  }

  render () {
    return (
      <div className={!this.state.isOpen ? 'minimized-card' : null}>

        <PanelHeader
          isOpen={this.state.isOpen}
          panelTitle={this.props.panelTitle}
          options={this.props.options}
          togglePanel={this.togglePanel}
          panelType={this.props.panelType} />

        { this.state.isOpen ? <PanelBody content={this.props.children} /> : null}

      </div>
    )
  }
}

export default Panel
