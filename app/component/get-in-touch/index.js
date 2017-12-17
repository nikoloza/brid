import React from 'react'
import Svg from 'react-inlinesvg'

export default () => (
  <section className="get-in-touch">
    <h6>Get in touch</h6>

    <a href="mailto:id@brid.me">id@brid.me</a>
    <a href="tel:+995599498809">+995 599 498809</a>
    
    <section className="socials">
      <a><Svg src="/assets/img/facebook.svg" /></a>
      <a><Svg src="/assets/img/dribbble.svg" /></a>
      <a><Svg src="/assets/img/behance.svg" /></a>
      {/* <a><Svg src="/assets/img/instagram.svg" /></a> */}
      <a><Svg src="/assets/img/youtube.svg" /></a>
    </section>
  </section>
)