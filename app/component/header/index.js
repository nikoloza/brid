import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../logo'
import Navigation from '../navigation'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }

  toggle () {
    const { state } = this
    this.setState({
      active: !state.active
    })
  }

  componentWillReceiveProps (nextProps) {
    const { location } = nextProps
    this.setState({
      theme: location.state && location.state.theme
    })
  }
  
  render () {
    const { props, state, toggle } = this
    return [
      <header key="header" className="header">
        <NavLink to="/"><Logo /></NavLink>

        <button
          className={[
            state.active ? 'active' : '', 
            state.theme ? state.theme : 'dark'
          ].join(' ')} 
          onClick={toggle.bind(this)}>
            <span>WORK</span>
        </button>
      </header>,

      <Navigation key="navigation" active={state.active} />
    ]
  }
}

export default Header