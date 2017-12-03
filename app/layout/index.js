import React, { Component } from 'react'
import Header from '../component/header/'

class Layout extends Component {
  render () {
    return (
      <section className="layout">
        <Header />
        
        <div>{this.props.children}</div>
      </section>
    )
  }
}

export default Layout