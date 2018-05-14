import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Canvas from './components/Canvas/Canvas'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Canvas />
        </main>
      </div>
    )
  }
}

export default App
