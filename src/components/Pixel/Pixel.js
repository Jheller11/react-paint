import React, { Component } from 'react'

class Pixel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: ''
    }
    this.paint = this.paint.bind(this)
  }

  paint(e) {
    e.preventDefault()
    this.setState({
      color: this.props.color
    })
  }

  render() {
    return (
      <div
        className="pixel"
        onMouseEnter={this.paint}
        style={{ backgroundColor: this.state.color }}
      >
        {' '}
      </div>
    )
  }
}

export default Pixel
