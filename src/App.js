import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ToolBar from './components/ToolBar/ToolBar'
import Canvas from './components/Canvas/Canvas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ToolBar />
        <Canvas />
      </div>
    )
  }
}

export default App
