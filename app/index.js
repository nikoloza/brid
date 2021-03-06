import React from 'react'
import { render } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

require('./style.css')

import Layout from './layout'
import Home from './home'
import Project from './project'
import Studio from './studio'
import Contact from './contact'

class PageNotFound extends React.Component {
  render () {
    return <div>
      not found
    </div>
  }
}

render(
  <Router>
    <Route render={({ location }) => (
      <Layout location={location}>
        <ReactCSSTransitionGroup
          transitionName="fade-up"
          transitionEnterTimeout={750}
          transitionLeaveTimeout={750}
        >
          <Switch key={location.key} location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/project/:id" component={Project}/>
            <Route path="/studio" component={Studio}/>
            <Route path="/contact" component={Contact}/>
            <Route component={PageNotFound}/>
          </Switch>
        </ReactCSSTransitionGroup>
      </Layout>
    )} />
  </Router>,
  document.getElementById('root')
)