import React, { Component } from 'react'

import GetInTouch from '../component/get-in-touch'

class Contact extends Component {
  render () {
    return <main className="contact">
      <section className="hello">
        <section className="form">
          <span>say hello</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>send</button>
        </section>
        <div className="map"></div>
      </section>
      <section className="aside">
        <div className="address">
          Archil Tsagareli 49,<br />Tbilisi, Georgia
        </div>
        
        <GetInTouch />
      </section>
    </main>
  }
}

export default Contact