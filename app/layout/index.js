import React, { Component } from 'react'
import Header from '../component/header/'

class Layout extends Component {
  render () {
    const { props } = this
    return (
      <section className="layout">
        <Header location={props.location} />
        <div>{props.children}</div>
      </section>
    )
  }
}

export default Layout