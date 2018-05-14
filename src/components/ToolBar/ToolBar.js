import React, { Component } from 'react'
import { BlockPicker } from 'react-color'

class ToolBar extends Component {
  constructor(props) {
    super(props)
    this.setActive = this.setActive.bind(this)
  }
  setActive(color) {
    console.log(color.hex)
    this.props.changeColor(color.hex)
  }
  render() {
    return (
      <div>
        <h2>Toolbar</h2>
        <div className="picker">
          <BlockPicker
            onChangeComplete={this.setActive}
            color={this.props.color}
          />
        </div>
      </div>
    )
  }
}

export default ToolBar
