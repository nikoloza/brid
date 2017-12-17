import React, { Component } from 'react'

import Header from '../component/header'
import Circle from '../component/circle'
import Filter from '../component/filter'
import Grid from '../component/grid'
import Footer from '../component/footer'

import { Categories, Projects } from './data'

class Home extends Component {
  render () {
    return <div>
      <main className="home">
        <Circle />

        <section className="message">
          <h1>we are team of young professionals who</h1>
          <h1 className="helper">{"< create Brand identity >"}</h1>
          <h1>that leaves fingerprints on the market & the minds of your customers, so their numbers grow by leaps & bounds!</h1>
        </section>

        <Filter categories={ Categories } />
      </main>

      <Grid categories={ Categories } projects={ Projects } />

      <Footer />
    </div>
  }
}

export default Home