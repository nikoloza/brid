import React, {Component} from 'react'

export default class Grid extends Component {
  constructor(props) {
    super(props)
    var { projects } = props
    this.state = {
      remapedProjects: projects.reduce(recognizeRowspan, [])
    }
  }

  render () {
    var { projects, categories } = this.props
    var { remapedProjects } = this.state
    
    return <main className="grid">
      {projects.map(({title, category, images, priority, position}, key) => title ? (
        <figure key={key} style={{
          backgroundImage: `url(${images[0]})`,
          backgroundPosition: position || 'center center',
          gridRowEnd: priority === 'high' ? 'span 2' : '',
        }}>
          <figcaption>
            <h5 className="title">{ title }</h5>
            <h6>{ category.map((catId, key) => 
              <span key={key}>{categories.filter(({id}) => id === catId)[0].title}</span>
            )}</h6>
          </figcaption>
        </figure>
      ) : null)}
    </main>
  }
}

// determines how keys are increased by rowspans
const recognizeRowspan = (result, next, key) => {
  const hasAbove = result[key - 4]
  const aboveIsHigh = (hasAbove && hasAbove.priority === 'high')
  const arrangeKey = aboveIsHigh ? key + 1 : key
  next.arrangeKey = arrangeKey
  result[arrangeKey] = next
  
  return result
}

// generate correct rowspan object
const generateRowSpan = (priority, key) => {
  var row = Math.floor(key / 4) + 1
  return {
    gridRowStart: row,
    gridRowEnd: priority === 'high' ? row + 2 : row,
  }
}