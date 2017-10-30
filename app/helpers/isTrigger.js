'use strict'

function isTrigger (el, parentSelector) {
  if (!parentSelector) return false
  var nodeList = document.querySelectorAll(parentSelector)

  for (let i = 0; i < nodeList.length; i++) {
    let p = el
    while (p && nodeList[i] !== p) p = p.parentNode
    if (nodeList[i] === p) return p
  }

  return false
}

export { isTrigger }