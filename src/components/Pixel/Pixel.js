import React, { Component } from 'react'

class Pixel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
    this.paint = this.paint.bind(this)
  }

  paint(e) {
    e.preventDefault()
    this.setState({
      color: 'red'
    })
  }

  render() {
    return (
      <div
        className="pixel"
        onMouseOver={this.paint}
        style={{ backgroundColor: this.state.color }}
      >
        {' '}
      </div>
    )
  }
}

export default Pixel
