'use strict'
require('./style.css')

import axios from 'axios'
import Modal from './modal'
import Parallax from './parallax'

window.m = new Modal()
window.p = new Parallax([{
  selector: '.section.hero::after',
  property: 'background-position',
  direction: { y: -1 },
  initial: '60% 0px',
  force: { y: 0.5 },
  wrap: [ '@media only screen and (min-width: 728px) {', '}' ]
}, {
  selector: '.section.ipad::after',
  property: 'transform',
  initial: '0% -100%',
  direction: { y: 1 },
  force: { y: .075 },
  wrap: [ '@media only screen and (min-width: 728px) {', '}' ]
}, {
  selector: [
    '.section.hero .header',
    '.section.hero .welcome > *',
    '.section.hero .latest',
    '.section.why .cell'
  ],
  when: 'visible',
  animation: {
    basic: 'animation',
    in: 'fade-in-up',
    out: 'hidden'
  },
  once: true,
  init (element, key) {
    if (key > 4) key = (key - 5) * 75
    else key *= 200
    element.style.animationDuration = '1000ms'
    element.style.animationDelay = key + 'ms'
  },
  before (element, key) {},
  after (element, key) {}
}, {
  selector: [
    '.section.try p',
    '.section.try .button',
    '.footer span'
  ],
  when: 'visible',
  once: true,
  animation: {
    basic: 'animation longer',
    in: 'fade-in-up',
    out: 'hidden'
  },
  init (element, key) {
    element.style.animationDelay = key * 85 + 'ms'
  }
}])

var emailForms = document.querySelectorAll('[data-email]')
emailForms.forEach((v) => {
  v.addEventListener('submit', (e) => {
    e.preventDefault()

    var { type, email } = v.dataset
    var data = {
      firstname: v.firstname.value,
      lastname: v.lastname.value,
      email: v.email.value,
      message: v.message ? v.message.value : '{ Signup Request }'
    }

    axios({
      method: 'post',
      url: 'https://formspree.io/' + email,
      data
    }).then((response) => window.m.set('thanks'))
    .catch((error) => window.m.set('error'))
  })
})
