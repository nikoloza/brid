import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

require('./style.css')

import Layout from './layout'
import Home from './home'

class Projects extends React.Component {
  render () {
    return <div>
      projects
    </div>
  }
}

class PageNotFound extends React.Component {
  render () {
    return <div>
      not found
    </div>
  }
}

render(
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects}/>
        <Route component={PageNotFound}/>
      </Switch>
    </Layout>
  </Router>,
  document.getElementById('root')
)