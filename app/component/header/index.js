import React, { Component } from 'react'
import Logo from '../logo'

class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <Logo />

        <button>
          WORK
        </button>
      </header>
    )
  }
}

export default Header