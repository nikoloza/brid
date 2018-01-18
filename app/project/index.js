import React, { Component } from 'react'

import Header from '../component/header'
import Circle from '../component/circle'
import Filter from '../component/filter'
import Grid from '../component/grid'
import Footer from '../component/footer'

import { Categories, Projects } from '../home/data'

class Project extends Component {
  constructor (props) {
    super(props)
    let projectKey = props.location.state.project
    this.state = { projectKey }
  }
  
  render () {
    var { state } = this
    var project = Projects[state.projectKey]

    return <div>
      <main className="project">
        <Circle type="dark" />

        <section className="message">
          <h1>{project.title}</h1>
          <h5>{project.category.map((catId, key) => 
            <span key={key}>{Categories.filter(({id}) => id === catId)[0].title}</span>
          )}</h5>
          <h4>{project.description
            ? project.description.map((desc, key) => <p key={key}>{ desc }</p> )
            : null
          }</h4>
        </section>
      </main>

      <section className="images">
        {project.images
          ? project.images.map((img, key) => 
            <figure key={key} style={{
              backgroundImage: `url(${img.url})`,
              backgroundPosition: img.position || 'center center',
              gridColumnEnd: img.col ? 'span ' + img.col : '',
              gridRowEnd: img.row ? 'span ' + img.row : '',
            }}></figure>
          )
          : null
        }
      </section>
      
      <Footer projects={Projects} project={true} id={state.projectKey} />
    </div>
  }
}

export default Project