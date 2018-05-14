import React, { Component } from 'react'
import Pixel from '../Pixel/Pixel'
import ToolBar from '../ToolBar/ToolBar'

class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 12000,
      pixels: [],
      color: ''
    }
    this.changeColor = this.changeColor.bind(this)
  }

  componentDidMount(i) {
    let pixels = []
    for (i = 0; i < this.state.number; i++) {
      pixels.push({ color: '', number: i })
    }
    this.setState({
      pixels: pixels
    })
  }

  changeColor(color) {
    this.setState({
      color: color
    })
    console.log(this.state.color)
  }

  render() {
    let canvas = this.state.pixels.map(pixel => {
      return (
        <Pixel
          number={pixel.number}
          key={pixel.number}
          color={this.state.color}
        />
      )
    })

    return (
      <div>
        <div className="canvas">{canvas}</div>
        <ToolBar changeColor={this.changeColor} color={this.state.color} />
      </div>
    )
  }
}

export default Canvas
