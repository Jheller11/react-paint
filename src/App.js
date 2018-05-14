import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ToolBar from './components/ToolBar/ToolBar'
import Canvas from './components/Canvas/Canvas'

class App extends Component {
  constructor() {
    super()
    this.state = {
      color: 'blue'
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ToolBar />
        <Canvas color={this.state.color} />
      </div>
    )
  }
}

export default App
