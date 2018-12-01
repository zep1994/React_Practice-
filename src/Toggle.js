import React, { Component } from 'react'

export default class Toggle extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }
   render() {
     return (
       <div>
       {this.state.on && <h3>Toggle Me!</h3>}
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
     )
   }
}
