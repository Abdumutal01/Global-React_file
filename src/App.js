import React, { Component } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

export default class App extends Component {

  constructor() {
    super()
    this.state = {}
  }


  render() {
    return (
      <div >
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
