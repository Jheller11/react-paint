import React, { Component } from 'react'
import Pixel from '../Pixel/Pixel'

class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 120,
      pixels: [],
      color: this.props.color
    }
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

  render() {
    let canvas = this.state.pixels.map(pixel => {
      return (
        <Pixel
          paint={this.paint}
          number={pixel.number}
          key={pixel.number}
          color={pixel.color}
        />
      )
    })

    return <div className="canvas">{canvas}</div>
  }
}

export default Canvas
