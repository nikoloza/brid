import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Circle from '../circle'
import GetInTouch from '../get-in-touch'

class navigation extends React.Component {
  render () {
    const { props } = this
    return (
      <main className={'navigation' + (props.active ? ' active' : '')}>
        <section>
          <nav>
            <NavLink activeClassName="active" exact to={{
              pathname: '/',
              state: {
                theme: 'dark',
              },
              isActive: function (match, location) {
                console.log(match, location)
              }
            }}>Work</NavLink>

            <NavLink activeClassName="active" to={{
              pathname: '/services',
              state: {
                theme: 'dark',
              }
            }}>Services</NavLink>

            <NavLink activeClassName="active" to={{
              pathname: '/about',
              state: {
                theme: 'dark',
              }
            }}>About</NavLink>

            <NavLink activeClassName="active" to={{
              pathname: '/contact',
              state: {
                theme: 'dark',
              }
            }}>Contact</NavLink>

            <Circle type="dark" />
          </nav>
          
          <GetInTouch />
        </section>
      </main>
    )
  }
}

export default navigation