import React, { Component } from 'react'

import Header from '../component/header'
import Circle from '../component/circle'
import Footer from '../component/footer'

class Studio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 0
    }
  }

  render () {
    return <div>
      <main className="studio">
        <Circle />

        <nav>
          <a>About</a>
          <a>Services</a>
          <a>Team</a>
          <a>Friends</a>
          <a>Awards</a>
        </nav>

        <section className="message about" data-title="About">
          <h1>we are team of young professionals who <span>{'< create Brand identity >'}</span> that leaves fingerprints on the market & the minds of your customers, so their numbers grow by leaps & bounds!</h1>

          <h1>We are multi-skilled team with diverse background from creative industries, aiming to enhance rapid growth of your company. We help you create brand with compelling visual identity that will make an impact in your industry and build long lasting relationship between your brand and community. </h1>
          
          <h1>Our goal is to pay special attention to each client, providing them with a high-quality final product. To achieve these results, we try to understand client's requirements the best that we can and offer effective ways to solve for their business.</h1>
        </section>

        <section className="message services" data-title="Services">
          <section className="capabilities">
            <h1>CAPABILITIES</h1>
            <ul>
              <li>Branding</li>
              <li>Packaging</li>
              <li>Campaign</li>
            </ul>
          </section>

          <section className="all">
            <h1>All</h1>

            <ul>
              <li>Brand strategy and development</li>
              <li>Creative & Art Direction</li>
              <li>Brand identity </li>
              <li>Logotype</li>
              <li>Packaging</li>
              <li>Print</li>
              <li>Editorial Design</li>
              <li>Illustration</li>
              <li>Iconography</li>
              <li>Typography</li>
              <li>Naming & Copywriting</li>
              <li>Web design & Development</li>
              <li>Social Media</li>
              <li>Social Campaign</li>
            </ul>
          </section>
        </section>

        <section className="message team" data-title="Team">
          <figure>
            <img src="/assets/content/ikun.jpg" alt="Ia Darakhvelidze"/>
            <figcaption>
              <h1>Ia Darakhvelidze</h1>
              <h5>Co-Founder / Art Director</h5>
            </figcaption>
          </figure>
          <figure>
            <img src="/assets/content/nini.jpg" alt="Nini frolova"/>
            <figcaption>
              <h1>Nini frolova</h1>
              <h5>Marketing Executive</h5>
            </figcaption>
          </figure>
          <figure>
            <img src="/assets/content/nini.jpg" alt="Nini frolova"/>
            <figcaption>
              <h1>Nini frolova</h1>
              <h5>Marketing Executive</h5>
            </figcaption>
          </figure>
        </section>

        <section className="message friends" data-title="Friends">
          <img src="/assets/content/agrohub.jpg" alt=""/>
          <img src="/assets/content/martv.jpg" alt=""/>
          <img src="/assets/content/imovies.jpg" alt=""/>
          <img src="/assets/content/georgia-characters.jpg" alt=""/>
          <img src="/assets/content/easymoney.jpg" alt=""/>
          <img src="/assets/content/petrocas.jpg" alt=""/>
          <img src="/assets/content/inkonotsure.jpg" alt=""/>
        </section>

        <section className="message awards" data-title="Awards">
          <ul>
            <li>2016</li>
            <li>The Best Futuristic font</li>
          </ul>
          <ul>
            <li>2013</li>
            <li>BRANDING category at Behance Tbilisi portfolio review.</li>
          </ul>
          <ul>
            <li>2012</li>
            <li>The TBILISI 2015 EYOF Logo design</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  }
}

export default Studio