import React, { Component } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import ContentInside from './components/contentInside'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContentInside />
        <Footer />
      </div>
    );
  }
}

export default App
