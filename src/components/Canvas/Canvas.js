import React, { Component } from 'react'
import Pixel from '../Pixel/Pixel'

class Canvas extends Component {
  constructor() {
    super()
    this.state = {
      number: 12000,
      pixels: []
    }
  }
  componentDidMount(i) {
    let pixels = []
    for (i = 0; i < this.state.number; i++) {
      pixels.push(<Pixel number={i} key={i} color={'#0F0000'} />)
    }
    this.setState({
      pixels: pixels
    })
  }

  render(i) {
    let canvas = this.state.pixels.map(pixel => {
      return pixel
    })

    return <div className="canvas">{canvas}</div>
  }
}

export default Canvas
