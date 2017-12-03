import React from 'react'

export default ({ categories }) => (
  <nav className="filter">
    { categories.map(({ title }, key) => 
      <a key={key} href="#"><span>{ title }</span></a> 
    )}

    <a href="#"><span>ALL PROJECTS</span></a>
  </nav>
)
