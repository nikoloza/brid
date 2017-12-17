import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Grid extends Component {
  render () {
    var { projects, categories } = this.props
    return <main className="grid">
      {projects.map(({title, category, poster, priority, position}, key) => title ? (
        <figure key={key} style={{
          backgroundImage: `url(${poster.url})`,
          backgroundPosition: poster.position || 'center center',
          gridRowEnd: priority === 'high' ? 'span 2' : '',
        }}>
          <Link to={{
            pathname: '/project/' + key,
            state: {
              project: key,
              theme: 'light',
            }
          }}>
            <figcaption>
              <h5 className="title">{ title }</h5>
              <h6>{ category.map((catId, key) => 
                <span key={key}>{categories.filter(({id}) => id === catId)[0].title}</span>
              )}</h6>
            </figcaption>
          </Link>
        </figure>
      ) : null)}
    </main>
  }
}