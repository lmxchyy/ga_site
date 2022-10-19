import React from 'react'
import Link from 'gatsby-link'

class counter extends React.Component {
    constructor(){
        super()
        this.state = { count: 0 }
    }
    render(){
  return (
    <div style={{color: this.props.color}}>
        <h1>counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={() => this.setState({
            count: this.state.count + 1
        })}>plus</button>
        <button onClick={() => this.setState({
            count: this.state.count - 1
        })}>minus</button>
        <br />
        <Link to="/">go Home</Link>
        </div>
  )
    }
}

export default counter