import React, { Component } from 'react';


export default class employeestile extends Component{
  render(){
    return(
    <div>
      <h1>{this.props.data.id}</h1>
      <h1>{this.props.data.name}</h1>
      <h1>{this.props.data.age}</h1>

    </div>)
  }
}
