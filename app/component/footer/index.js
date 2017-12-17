import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import GetInTouch from '../get-in-touch'

class Footer extends React.Component {
  render () {
    const { props } = this
    const nextProject = props.projects && 
      props.projects.length > props.id + 1 ? props.id + 1 : 0
    const leftSpace = props.project 
      ? <section className="copyright">
        <Link to={{
          pathname: '/project/' + nextProject,
          state: {
            project: nextProject,
            theme: 'light',
          }
        }}><h1>Next ></h1></Link>
        </section>
      : <section className="copyright">
        <h1>So ..</h1>
        <h1>Let's start working together ></h1>

        <span>Brid © 2017</span>
      </section>

    return (
      <footer className={'footer' + (props.project ? ' project' : '')}>
        {leftSpace}
        <GetInTouch />
      </footer>
    )
  }
}

export default Footer