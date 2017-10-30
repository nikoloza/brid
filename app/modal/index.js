'use strict'

import { isTrigger } from '../helpers/isTrigger'
import { isMobile } from '../helpers/devices'

class Modal {
  constructor () {
    var that = this
    this.modals = {}
    this.fade = document.querySelector(`.fade`)

    var evType = isMobile ? 'touchstart' : 'click'
    document.querySelector('body').addEventListener(evType, function(ev) {
      var target = ev.target

      var modalTrigger = isTrigger(target, '[data-open-modal]')
      if (modalTrigger) {
        var modalName = modalTrigger.dataset.openModal
        var cache = that.cache(modalName)
        return that.in(cache)
      }

      var closeModalTrigger = isTrigger(target, '[data-close-modal]')
      if (closeModalTrigger) return that.out()
    })
  }

  in (refModal) {
    [refModal, this.fade].forEach((el) => {
      var { classList } = el
      classList.add('in')
      classList.remove('out')
    })
  }

  cache (modalName) {
    var refModal = this.modals[modalName]
    if (!refModal) {
      refModal = document.querySelector(`[data-modal=${modalName}]`)
      this.modals[modalName] = refModal
    }
    return refModal
  }

  out () {
    var activeModal = document.querySelector('.modal.in')
    if (!activeModal) return
    ;[activeModal, this.fade].forEach((el) => {
      var { classList } = el
      classList.remove('in')
      classList.add('out')

      var transitionDuration = parseInt(
        window.getComputedStyle(el, null)
          .getPropertyValue("transition-duration")
      ) || 500

      var t = window.setTimeout(() => {
        classList.remove('out')
        window.clearTimeout(t)
      }, transitionDuration)
    })
  }

  set (modalName) {
    this.out()
    var cache = this.cache(modalName)
    this.in(cache)
  }
}

export default Modal
