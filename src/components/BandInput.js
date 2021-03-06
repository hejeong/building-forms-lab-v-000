// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state={
    name: ''
  }

  handleOnChange = (event)=>{
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange} valu={this.state.name}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default BandInput
