import React, { Component } from 'react'
import Header from '../component/header'
import Circle from '../component/circle'
import Filter from '../component/filter'
import Grid from '../component/grid'

import { Categories, Projects } from './data'

class Home extends Component {
  render () {
    return [
      <main className="home" key="main">
        <Circle />

        <section className="message">
          <h1>we are team of young professionals who</h1>
          <h1 className="helper">{"< create Brand identity >"}</h1>
          <h1>that leaves fingerprints on the market & the minds of your customers, so their numbers grow by leaps & bounds!</h1>
        </section>

        <Filter categories={ Categories } />
      </main>,

      <Grid key="grid" categories={ Categories } projects={ Projects } />,

      <footer key="footer" />
    ]
  }
}

export default Home